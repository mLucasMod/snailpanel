import { Component } from '@angular/core';
import { SharedModule } from '../../shared';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-template-add',
  templateUrl: './template-add.component.html',
  styleUrl: './template-add.component.scss'
})
export class TemplateAddComponent {}
