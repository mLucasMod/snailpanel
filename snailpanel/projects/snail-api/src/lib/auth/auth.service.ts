import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private authUrl = 'http://192.168.1.52:5000/auth/';
  
  public isAuthenticated = signal<boolean>(false);

  constructor(private router: Router, private http: HttpClient) {}

  async login(login: string, password: string): Promise<void> {
    try {
      await firstValueFrom(
        this.http.post(this.authUrl, { "login": login, "password": password }, { withCredentials: true })
      );
      await this.router.navigate(['/']);
      this.isAuthenticated.set(true);
    } catch (error) {
      console.error('Erreur lors de l\'authentification:', error);
    }
  }

  async logout(): Promise<void> {
    try {
      await firstValueFrom(
        this.http.delete(this.authUrl, { withCredentials: true })
      );
      await this.router.navigate(['/signin']);
      this.isAuthenticated.set(false);
    } catch (error) {
      console.error('Erreur lors de l\'authentification:', error);
    }
  }

  async refresh(): Promise<boolean> {
    try {
      const response = await firstValueFrom(
        this.http.get<{ authenticated: boolean }>(this.authUrl, { withCredentials: true })
      );
      this.isAuthenticated.set(response.authenticated);
      return response.authenticated;
    } catch (error) {
      console.error('Erreur lors de l\'authentification:', error);
      this.isAuthenticated.set(false);
      return false;
    }
  }
}
