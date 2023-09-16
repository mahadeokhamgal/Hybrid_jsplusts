'use strict';
import { assetUrl, baseUrl } from '../../../single-spa/asset-url.js';
angular.
  module('core.phone').
  factory('Phone', ['$resource',
    function($resource) {
      return $resource(baseUrl('assets/phones/:phoneId.json'), {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
