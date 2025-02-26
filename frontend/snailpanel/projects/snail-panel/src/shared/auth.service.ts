import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login() {
    this.isAuthenticated = true;
    localStorage.setItem('auth', 'true');
    this.router.navigate(['/']);
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('auth');
    this.router.navigate(['/signin']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || localStorage.getItem('auth') === 'true';
  }
}
