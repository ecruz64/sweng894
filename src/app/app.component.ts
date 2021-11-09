import { Component, OnInit } from '@angular/core';
import { OktaAuthService} from "@okta/okta-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lawn Buddy';
  isAuthenticated: boolean;

  constructor(public oktaAuth: OktaAuthService) {
    // subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated:boolean) => this.isAuthenticated = isAuthenticated
    );
  }
  async  ngOnit()  {
    // get authentication state for immediate use
    this.isAuthenticated = await  this.oktaAuth.isAuthenticated();
  }
  async  login()  {
    await this.oktaAuth.signInWithRedirect();
  }
  async logout() {
    await  this.oktaAuth.signOut();
  }

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
