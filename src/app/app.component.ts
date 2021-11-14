import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lawn Buddy';
  isAuthenticated: boolean;

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

  constructor(public oktaAuth: OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }
  ngOnInit() {
    this.oktaAuth.isAuthenticated().then((auth) => {this.isAuthenticated = auth});
  }
  login() {
    this.oktaAuth.loginRedirect();
  }

  logout() {
    this.oktaAuth.logout('/');
  }
}
