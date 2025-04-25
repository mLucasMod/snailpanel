import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AngularSplitModule } from 'angular-split';
import { HeaderComponent, SidebarComponent } from '../shared';
import { AuthService } from '@snail/api';

@Component({
  selector: 'app-root',
  imports: [
    AngularSplitModule,
    CommonModule,
    HeaderComponent,
    RouterModule,
    RouterOutlet,
    SidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  public isSidebarVisible = true;
  public innerWidth = window.innerWidth;

  constructor(protected authService: AuthService) {
    this.checkSidebarVisibility();
  }

  ngAfterViewInit(): void {
    this.checkSidebarVisibility();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.checkSidebarVisibility();
  }
  
  private checkSidebarVisibility() {
    this.isSidebarVisible = this.innerWidth > 768;
  }
}
