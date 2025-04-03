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
  public innerWidth: number = window.innerWidth;
  public isSidebarVisible: boolean = true;

  constructor(protected authService: AuthService) {
    this.checkSidebarVisibility();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.checkSidebarVisibility();
  }

  ngAfterViewInit(): void {
    this.checkSidebarVisibility();
  }

  private checkSidebarVisibility() {
    this.isSidebarVisible = this.innerWidth > 768;
  }
}
