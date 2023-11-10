'use strict';
import * as angular from 'angular';
import './core/core.module';
import './phone-detail/phone-detail.module';
import './phone-list/phone-list.module';
import { downgradeInjectable } from '@angular/upgrade/static';
import { Phone } from './core/phone/phone.service';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
]);
