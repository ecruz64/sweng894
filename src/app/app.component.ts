import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lawn Buddy';
  isShowHlawnIf = false;
  isShowWaterIf = false;
  isShowMowIf = false;
  toggleDisplayHlawnIf () {
    this.isShowHlawnIf = !this.isShowHlawnIf;
  }
  toggleDisplayMowIf () {
    this.isShowMowIf = !this.isShowMowIf;
  }
  toggleDisplayWaterIf () {
    this.isShowWaterIf = !this.isShowWaterIf;
  }
}
