import { Component } from '@angular/core';
import { SharedModule } from '../shared';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {}
