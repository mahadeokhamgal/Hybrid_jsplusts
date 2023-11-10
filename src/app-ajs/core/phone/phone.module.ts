'use strict';

import { downgradeInjectable } from "@angular/upgrade/static";
import { Phone } from "./phone.service";
import * as angular from "angular";

// Define the `core.phone` module
angular.module('core.phone', ['ngResource'])
.factory('Phone', downgradeInjectable(Phone));//both service or factory def works

