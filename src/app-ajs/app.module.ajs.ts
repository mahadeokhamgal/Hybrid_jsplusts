'use strict';
import * as angular from 'angular';
import './core/core.module';
import './phone-detail/phone-detail.module';
import './phone-list/phone-list.module';
import { downgradeInjectable } from '@angular/upgrade/static';
import { Test } from 'src/app/test.service';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
])
.factory('Test', downgradeInjectable(Test));//both service or factory def works
