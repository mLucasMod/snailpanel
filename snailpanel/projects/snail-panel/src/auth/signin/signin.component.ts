import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@snail/api';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-signin',
  imports: [SharedModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  protected loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  protected login(): void {
    if (this.loginForm.valid) {
      var { login, password } = this.loginForm.value;
      this.authService.login({login, password}).subscribe();
    }
  }
}
