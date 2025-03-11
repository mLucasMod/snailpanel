import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AngularSplitModule } from 'angular-split';
import { HeaderComponent, SidebarComponent } from '../shared';

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

  constructor() {
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
