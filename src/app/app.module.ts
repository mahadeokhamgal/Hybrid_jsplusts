import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Phone } from './core/phone/phone.service';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { CheckmarkPipe } from './core/checkmark/checkmark.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhoneDetailComponent,
    CheckmarkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule,
    HttpClientModule
  ],
  providers: [
    Phone
  ],
  bootstrap: []
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
 }
