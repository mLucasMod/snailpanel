import { Component } from '@angular/core';
import { SharedModule } from '../../shared';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.scss'
})
export class UserViewComponent {}
