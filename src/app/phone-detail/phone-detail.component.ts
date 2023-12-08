import { Component, Inject } from '@angular/core';
import { PhoneData, Phone } from '../core/phone/phone.service';

// Register `phoneDetail` component, along with its associated controller and template
@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.component.html'
})
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(phone: Phone) {
    console.log("I am constructore in phone detail controller");

    let phoneId = 'motorola-xoom-with-wi-fi';
    phone.get(phoneId).subscribe(data => {
      this.phone = data;
      console.log("phone images is", this.phone);

      this.setImage(data.images[0]);
    });
    phone.event$.subscribe(item => { console.log("Event caught in phone detail state now is => ", phone.stateObj) }
    );

    setTimeout(()=>{
      console.log("broadcasting from phone detail typscript one");
      phone.stateObj = {"id":2, "setBy": "phonedetailts"}
      phone.emitEvent("phone-detail data");
    }, 6000)
  }

  setImage(imageUrl) {
    this.mainImageUrl = imageUrl;
  }
}

// angular.
//   module('phoneDetail').
//   directive(
//     'phoneDetail',
//     downgradeComponent({component: PhoneDetailComponent}) as angular.IDirectiveFactory
//   );
