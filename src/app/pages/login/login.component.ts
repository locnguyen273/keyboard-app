import { Component, isDevMode } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { IUserLogin, UserDataLoginResponse, UserLoginResponse } from 'src/app/models/user';
import { Store, select } from '@ngrx/store';
import { loginUserAction } from 'src/app/store/actions/auth.action';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm;
  hide = true;
  auth$?: Observable<UserDataLoginResponse>

  constructor(
    public fb: FormBuilder,
    private auhtService: AuthService,
    private router: Router,
    private store: Store<AppState>,
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
    this.auth$ = store.pipe(select('loginUser'));
  }

  onSubmit(): void {
    let loginRequest: any = this.loginForm.value;
    this.auhtService.login(loginRequest).subscribe((res: UserLoginResponse) => {
      if(res.status) {
        const loginData:any = res.data;
        // this.store.dispatch(loginUserAction(loginData));
        if(!isDevMode) {
          localStorage.setItem('userInfo', btoa(JSON.stringify(loginData)));
        } else {
          localStorage.setItem('userInfo', JSON.stringify(loginData));
        }
        this.router.navigateByUrl('/');
      }
    })
  }
}
