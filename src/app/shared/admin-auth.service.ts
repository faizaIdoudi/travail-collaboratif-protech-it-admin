import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);


  constructor() { }
  login(email: string, password: string): Observable<boolean> {
    // Effectuez ici la vérification des informations d'authentification
    // Si les informations sont valides, définissez isAuthenticatedSubject à true
    return this.isAuthenticatedSubject.asObservable();
  }
  signup(
    nom: string,
    prenom: string,
    adresse: string,
    tel: string,
    email: string,
    password: string
  ): Observable<boolean> {
    // Effectuez ici l'enregistrement du nouvel utilisateur
    // Définissez isAuthenticatedSubject à true si l'enregistrement réussit
    return this.isAuthenticatedSubject.asObservable();
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
  }
  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
}
