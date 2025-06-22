import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@snail/env';
import { catchError, map, Observable, of } from 'rxjs';
import { ActiveUser } from './active-user';
import { LoginForm } from './login-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly authUrl = environment.apiUrl + "/auth/";
  private readonly _authenticated = signal<boolean>(false);
  
  public readonly isAuthenticated = computed(() => this._authenticated());

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

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
    return this.http.get<ActiveUser>(this.authUrl, { withCredentials: true }).pipe(
      map((activeUser) => {
        this._authenticated.set(activeUser.authenticated);
        return activeUser.authenticated;
      }),
      catchError(() => {
        this._authenticated.set(false);
        return of(false);
      })
    );
  }
}
