import { AppState } from 'src/app/store/app.state';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Component, isDevMode } from '@angular/core';
import { UserDataLoginResponse, UserLoginResponse } from 'src/app/models/user';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/store/actions/loading.action';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss'],
})
export class LoginAdminComponent {
  loginForm;
  hide = true;
  auth$?: Observable<UserDataLoginResponse>;

  constructor(
    public fb: FormBuilder,
    private auhtService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private store: Store<AppState>,
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    let loginRequest = this.loginForm.value;
    this.auhtService.login(loginRequest).subscribe(
      (res: UserLoginResponse) => {
        if (res.status) {
          this.store.dispatch(setLoadingSpinner({ status: true }));
          const loginData = res.data;
          if (loginData.role.toLowerCase() === 'admin') {
            this.router.navigateByUrl('/admin');
          } else {
            this.router.navigateByUrl('/');
          }
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
        this.toastr.error(error, 'Opps !!!');
      }
    );
  }
}
