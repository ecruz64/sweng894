import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import  {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatChipsModule} from "@angular/material/chips";

import { AppComponent } from './app.component';
import {WateringComponent} from "./watering/watering.component";
import {HLawnComponent} from "./h-lawn/h-lawn.component";
import {MowingComponent} from "./mowing/mowing.component";

@NgModule({
  declarations: [
    AppComponent,
    WateringComponent,
    HLawnComponent,
    MowingComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
