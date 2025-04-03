import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private authUrl = 'https://localhost:5000/auth';

  private isAuthenticated = false;

  constructor(private router: Router, private http: HttpClient) {
    this.check();
  }

  login(username: string, password: string) {
    // this.isAuthenticated = true;
    // localStorage.setItem('auth', 'true');
    this.http.post(`${this.authUrl}/login`, { username, password }, { withCredentials: true });
    this.router.navigate(['/']);
  }

  logout() {
    // this.isAuthenticated = false;
    // localStorage.removeItem('auth');
    this.http.post(`${this.authUrl}/logout`, {}, { withCredentials: true });
    this.router.navigate(['/signin']);
  }

  check(): boolean {
    this.http.get(`${this.authUrl}/check`, { withCredentials: true });
    return this.isAuthenticated;
  }

  // isLoggedIn(): boolean {
  //   return this.isAuthenticated || localStorage.getItem('auth') === 'true';
  // }

  // private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  // public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  // constructor(private http: HttpClient) {
  //   this.check();
  // }

  // login(username: string, password: string): Observable<any> {
  //   return this.http.post(`${this.authUrl}/login`, { username, password }, { withCredentials: true }).pipe(
  //     tap(() => this.isAuthenticatedSubject.next(true))
  //   );
  // }

  // logout(): Observable<any> {
  //   return this.http.post(`${this.authUrl}/logout`, {}, { withCredentials: true }).pipe(
  //     tap(() => this.isAuthenticatedSubject.next(false))
  //   );
  // }

  // check(): void {
  //   this.http.get(`${this.authUrl}/check`, { withCredentials: true }).subscribe({
  //     next: () => this.isAuthenticatedSubject.next(true),
  //     error: () => this.isAuthenticatedSubject.next(false)
  //   });
  // }
}
