import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxTimelineModule } from 'ngx-timeline';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';import { NgModule } from '@angular/core';

import {WateringComponent} from "./watering/watering.component";
import {HLawnComponent} from "./h-lawn/h-lawn.component";
import {MowingComponent} from "./mowing/mowing.component";

@NgModule({
  declarations: [
    AppComponent,
    WateringComponent,
    HLawnComponent,
    MowingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
