import { Component } from '@angular/core';
import { SharedModule } from '../shared';
import { SnailToastService } from '@snail/ui';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(public toastService: SnailToastService) {}
}
