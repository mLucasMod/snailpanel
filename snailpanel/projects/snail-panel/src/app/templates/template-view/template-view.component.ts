import { Component } from '@angular/core';
import { SharedModule } from '../../shared';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-template-view',
  templateUrl: './template-view.component.html',
  styleUrl: './template-view.component.scss'
})
export class TemplateViewComponent {}
