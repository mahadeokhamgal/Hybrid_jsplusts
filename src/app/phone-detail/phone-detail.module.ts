'use strict';
import { downgradeComponent } from '@angular/upgrade/static';
import { PhoneDetailComponent } from './phone-detail.component';
import * as angular from 'angular';

// Define the `phoneDetail` module
angular.module('phoneDetail', [
  'ngRoute',
  'core.phone'
]).
directive(
  'phoneDetail',
  downgradeComponent({component: PhoneDetailComponent})
);
