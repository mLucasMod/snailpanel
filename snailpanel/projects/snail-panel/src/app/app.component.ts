import { Component, HostListener, OnDestroy, OnInit, signal } from '@angular/core';
import { apiEvents, AuthService } from '@snail/api';
import { Subscription } from 'rxjs';
import { CoreModule } from './core';
import { SharedModule } from './shared';

@Component({
  standalone: true,
  imports: [
    CoreModule,
    SharedModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  
  protected isSidebarVisible = signal(true);
  private innerWidth = window.innerWidth;
  private newApiErrorToConsume$!: Subscription;

  constructor(
    protected authService: AuthService
  ) { }

  ngOnInit(): void {
    this.checkSidebarVisibility();
    this.newApiErrorToConsume$ = apiEvents.newErrorToConsume$.subscribe((response) => {
      // TODO toast
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.checkSidebarVisibility();
  }

  private checkSidebarVisibility() {
    this.isSidebarVisible.set(this.innerWidth > 768);
  }

  ngOnDestroy(): void {
    this.newApiErrorToConsume$.unsubscribe();
  }
}
