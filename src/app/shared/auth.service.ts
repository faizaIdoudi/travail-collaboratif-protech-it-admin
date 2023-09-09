import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = true;

  constructor(private router: Router) { }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
