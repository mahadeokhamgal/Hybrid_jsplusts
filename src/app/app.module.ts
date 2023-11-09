import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { PhonecatAppComponent } from './phonecat-app.component';
import { HttpClientModule } from '@angular/common/http';
import { Test } from './test.service';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule
  ],
  declarations:[
    PhonecatAppComponent
  ],
  providers:[ Test ],
  bootstrap:[
    PhonecatAppComponent
  ]
})
export class AppModule {
}
