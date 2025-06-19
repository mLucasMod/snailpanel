import { Component, HostListener, OnInit, signal } from '@angular/core';
import { AuthService } from '@snail/api';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    SharedModule,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public isSidebarVisible = signal(true);
  public innerWidth = window.innerWidth;

  constructor(
    protected authService: AuthService
  ) {}

  ngOnInit(): void {
    this.checkSidebarVisibility();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.checkSidebarVisibility();
  }
  
  private checkSidebarVisibility() {
    this.isSidebarVisible.set(this.innerWidth > 768);
  }
}
