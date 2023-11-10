import 'angular-resource';
import { Phone } from './phone.service';
import { downgradeInjectable } from '@angular/upgrade/static';
import * as angular from 'angular';

// Define the `core.phone` module
angular.module('core.phone', ['ngResource'])
.factory('Phone', downgradeInjectable(Phone));