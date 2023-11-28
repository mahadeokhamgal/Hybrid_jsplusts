'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: './app/phone-list/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        Phone.query().subscribe(data => {
          this.phones = data;
          console.log("emmiting event for Phone");
          Phone.emitEvent("phonelist");
        });
        this.orderProp = 'age';
        Phone.event$.subscribe(item =>  console.log("Event caught in phone list js data passed was => ", item))
      }
    ]
  });
