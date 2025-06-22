import { Component } from '@angular/core';
import { SharedModule } from '../shared';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {}
