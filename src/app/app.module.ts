import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule} from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BsDatepickerModule} from "ngx-bootstrap";
import { NgxTimelineModule} from "ngx-timeline";
import  { FormsModule, ReactiveFormsModule} from "@angular/forms";

import  { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModuleConfig } from "@angular/platform-browser/animations";
import  { ModalModule} from "ngx-bootstrap";
import  { HomeComponent} from './home/home.component';
import  { TimelineComponent } from './timeline/timeline.component';
import {WateringComponent} from "./watering/watering.component";
import {HLawnComponent} from "./h-lawn/h-lawn.component";
import {MowingComponent} from "./mowing/mowing.component";

import { OKTA_CONFIG, OktaAuthModule } from "@okta/okta-angular";
import { ServiceServerComponent } from './service-server/service-server.component';

const oktaConfig = {
  issuer: 'https://dev-1990201/oauth2/default',
  client_id: '0oa2jwz0wkgvFgMij5d7',
  redirectUri: window.location.origin + '/callback'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimelineComponent,
    WateringComponent,
    HLawnComponent,
    MowingComponent,
    ServiceServerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    OktaAuthModule
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: oktaConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
