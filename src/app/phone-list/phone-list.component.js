'use strict';
import { assetUrl, baseUrl } from '../../single-spa/asset-url.js';
// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: baseUrl('app/phone-list/phone-list.template.html'),
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });
