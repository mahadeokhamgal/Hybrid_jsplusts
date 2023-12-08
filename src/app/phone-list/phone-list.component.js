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
          
          setTimeout(()=>{
            console.log("emmiting event for Phone");
            Phone.stateObj = {"id":3, "setBy": "phonelistjs"}
            Phone.emitEvent("phonelist");
            
          }, 10000)
        });
        this.orderProp = 'age';
        Phone.event$.subscribe(item =>  console.log("Event caught in phone list js data passed was => ", Phone.stateObj))
      }
    ]
  });
