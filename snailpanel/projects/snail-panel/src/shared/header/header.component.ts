import { Component } from '@angular/core';
import { AuthService } from '@snail/api';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(protected authService: AuthService) {}

  login() {
    this.authService.login("root", "1234");
  }

  logout() {
    this.authService.logout();
  }
}