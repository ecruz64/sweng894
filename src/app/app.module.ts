import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HLawnComponent } from './h-lawn/h-lawn.component';
import {MowingComponent} from "./mowing/mowing.component";

@NgModule({
  declarations: [
    AppComponent,
    HLawnComponent,
    MowingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
