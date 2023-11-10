import { Component, isDevMode } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { IUserLogin, UserDataLoginResponse, UserLoginResponse } from 'src/app/models/user';
import { Store, select } from '@ngrx/store';
import { loginUserAction } from 'src/app/store/actions/auth.action';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.interface';
import { ToastrService } from 'ngx-toastr';
import { setHideLoadingSpinner, setLoadingSpinner } from 'src/app/store/actions/loading.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm;
  hide = true;
  auth$?: Observable<UserDataLoginResponse>;

  constructor(
    public fb: FormBuilder,
    private auhtService: AuthService,
    private router: Router,
    private store: Store<AppState>,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
    this.auth$ = store.pipe(select('loginUser'));
  }

  enterSubmit(event: KeyboardEvent) {
    if(event.keyCode === 13) this.onSubmit();
  }

  onSubmit(): void {
    let loginRequest = this.loginForm.value;
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.auhtService.login(loginRequest).subscribe(
      (res: UserLoginResponse) => {
        if (res.status) {
          const loginData = res.data;
          if (loginData.role.toLowerCase() === 'admin') {
            this.router.navigateByUrl('/admin');
          } else {
            this.router.navigateByUrl('/');
          }
          this.store.dispatch(setHideLoadingSpinner({ status: false }));
          this.toastr.success(res.message, 'Xin chúc mừng !!!');
          if (!isDevMode) {
            localStorage.setItem('userInfo', btoa(JSON.stringify(loginData)));
          } else {
            localStorage.setItem('userInfo', JSON.stringify(loginData));
          }
        } else if (!res.status) {
          this.toastr.error(res.message, 'Opps !!!');
        }
      },
      (error) => {
        this.store.dispatch(setHideLoadingSpinner({ status: false }));
        this.toastr.error(error, 'Opps !!!');
      }
    );
  }
}
