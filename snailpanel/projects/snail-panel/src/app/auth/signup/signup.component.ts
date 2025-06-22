import { Component } from '@angular/core';
import { SharedModule } from '../../shared';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {}
