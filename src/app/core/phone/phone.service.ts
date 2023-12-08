import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as angular from 'angular';
import { downgradeInjectable } from '@angular/upgrade/static';

export interface PhoneData {
  additionalFeatures: string;
  android: {
    os: string;
    ui: string;
  };
  availability: string[];
  battery: {
    standbyTime: string;
    talkTime: string;
    type: string;
  };
  camera: {
    features: string[];
    primary: string;
  };
  connectivity: {
    bluetooth: string;
    cell: string;
    gps: boolean;
    infrared: boolean; 
    wifi: string;
  };
  description: string;
  display: {
    screenResolution: string;
    screenSize: string;
    touchScreen: boolean;
  };
  hardware: {
      accelerometer: boolean;
      audioJack: string;
      cpu: string;
      fmRadio: boolean;
      physicalKeyboard: boolean;
      usb: string;
  };
  id: string;
  images: string[]; 
  name: string;
  sizeAndWeight: {
      dimensions:  string[];
      weight: string;
  };
  storage: {
      flash: string;
      ram: string;
  };
}

@Injectable()
export class Phone {
  public event$: EventEmitter<any>;
  public event2$: EventEmitter<any>;
  public stateObj: any;
  constructor(private http: HttpClient) {
    this.stateObj = {"id":1, "setBy": "phoneService"};
    this.event$ = new EventEmitter();
    setTimeout(()=>{
      this.emitEvent("Phonelist service emiting event");
      this.stateObj = {"id":1, "setBy": "phoneService"};
    }, 4000)
   }
   emitEvent(data){
    this.event$.emit(data);
   }
  query(): Observable<PhoneData[]> {
    return this.http.get<PhoneData[]>(`assets/phones/phones.json`);
  }
  get(id: string): Observable<PhoneData> {
    return this.http.get<PhoneData>(`assets/phones/${id}.json`);
  }
}