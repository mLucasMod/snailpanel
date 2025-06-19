import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-server-view',
  imports: [SharedModule],
  templateUrl: './server-view.component.html',
  styleUrl: './server-view.component.scss'
})
export class ServerViewComponent {}
