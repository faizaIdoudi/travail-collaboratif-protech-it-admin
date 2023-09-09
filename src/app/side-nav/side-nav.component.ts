import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  constructor(private router:Router) {}

  showSidebar(): boolean {
    const currentRoute = this.router.url;
    // Affiche la barre latérale sauf sur les pages de connexion et d'inscription
    return !(currentRoute === '/login' || currentRoute === '/signup' );
  }

}
