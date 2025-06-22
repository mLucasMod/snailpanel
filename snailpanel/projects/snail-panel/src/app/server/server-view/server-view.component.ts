import { Component } from '@angular/core';
import { SharedModule } from '../../shared';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-server-view',
  templateUrl: './server-view.component.html',
  styleUrl: './server-view.component.scss'
})
export class ServerViewComponent {}
