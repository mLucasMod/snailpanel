import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'snail-button',
  imports: [ButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class SnailButtonComponent {

  public label = input<string>("");
  public disabled = input<boolean>(false);
  public color = input<"primary" | "success" | "warn" | "danger" | "info">("primary");
  
  public buttonClick = output<void>();
}
