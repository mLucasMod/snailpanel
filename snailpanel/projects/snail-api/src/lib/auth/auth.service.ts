import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@snail/env';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthSession } from './auth-session';
import { LoginForm } from './login-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly authUrl = environment.apiUrl + "/auth";

  private readonly _authenticated = signal<boolean>(false);
  private readonly _user = signal<string | null>(null);

  public get isAuthenticated(): boolean {
    return this._authenticated();
  }

  public get activeUser(): string | null {
    return this._user();
  }

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  login(loginForm: LoginForm): Observable<null> {
    return this.http.post<null>(this.authUrl, loginForm, { withCredentials: true }).pipe(
      map(() => {
        this._authenticated.set(true);
        this.router.navigate(["/"]);
        return null;
      })
    );
  }

  logout(): Observable<null> {
    return this.http.delete<null>(this.authUrl, { withCredentials: true }).pipe(
      map(() => {
        this._authenticated.set(false);
        this.router.navigate(["/signin"]);
        return null;
      })
    );
  }

  refresh(): Observable<boolean> {
    return this.http.get<AuthSession>(this.authUrl, { withCredentials: true }).pipe(
      map((auth) => {
        this._authenticated.set(auth.authenticated);
        this._user.set(auth.user);
        return auth.authenticated;
      }),
      catchError(() => {
        this._authenticated.set(false);
        this._user.set(null);
        return of(false);
      })
    );
  }
}
