import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm;
  constructor(public fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    })
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
  }
}
