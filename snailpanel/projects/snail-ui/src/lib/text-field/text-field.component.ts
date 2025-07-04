import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'snail-text-field',
  imports: [
    FormsModule,
    InputTextModule
  ],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss'
})
export class SnailTextFieldComponent {

  public placeholder = input<string>();
  public disabled = input<boolean>(false);

  public value: string = "";
}
