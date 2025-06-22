import { Component } from '@angular/core';
import { SharedModule } from '../../shared';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-server-add',
  templateUrl: './server-add.component.html',
  styleUrl: './server-add.component.scss'
})
export class ServerAddComponent {}
