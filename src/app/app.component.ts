import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lawn Buddy';
  isShowDivIf = false;
  toggleDisplayDivIf () {
    this.isShowDivIf = !this.isShowDivIf;
  }
}
