import { Component } from '@angular/core';
import { AuthService } from '@snail/api';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    protected authService: AuthService
  ) {}

  protected logout(): void {
    this.authService.logout().subscribe();
  }
}
