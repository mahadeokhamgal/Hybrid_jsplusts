import 'angular-animate';
import 'angular-route';

import './phone-list/phone-list.module';
import './phone-list/phone-list.component';

// Define the `phonecatApp` module
export default angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'phoneList'
]);
