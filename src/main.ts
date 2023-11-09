import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';

// Import these globally to bring in their @types
import 'angular';
import 'angular-animate';
import 'angular-resource';
import 'angular-route';

// Need to import NG 1.x module
import './app-ajs';

import * as angular from 'angular';
import { setAngularJSGlobal } from '@angular/upgrade/static';
setAngularJSGlobal(angular);

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['phonecatApp']);
});