import { Component, OnInit } from '@angular/core';
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

  async logout() {
    await this.authService.logout();
  }
}