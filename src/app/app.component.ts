import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admindash';
  sideBarOpen = true ;
  isLoginPage = false;
  isInscriptionPage = false;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login';
        this.isInscriptionPage = event.url === '/signup';
      }
    });

  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen ;
  }
}
