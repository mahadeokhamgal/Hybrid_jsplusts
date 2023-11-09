'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: './app-ajs/phone-list/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        Phone.query().subscribe(data => {
          console.log("subscribe after query");
          
          this.phones = data;
        });
        this.orderProp = 'age';
      }
    ]
  });
