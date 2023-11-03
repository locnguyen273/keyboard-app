import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { IUserRegister, UserRegisterResponse } from 'src/app/models/user';
import { CustomvalidationService } from 'src/app/shared/services/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm;
  hide = true;

  constructor(
    public fb: FormBuilder,
    private readonly customValidator: CustomvalidationService,
    public authService: AuthService,
    private toastr: ToastrService,
    public router: Router
  ) {
    this.registerForm = this.fb.group(
      {
        fullName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        mobile: new FormControl('', [
          Validators.required,
          Validators.pattern(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/),
        ]),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', [Validators.required]),
        address: new FormControl('', Validators.required),
      },
      {
        validators: [
          this.customValidator.matchPassword('password', 'confirmPassword'),
        ],
      }
    );
  }

  onSubmit(): void {
    const { fullName, email, password, mobile, address } =
      this.registerForm.value;
    let newRegister: IUserRegister = {
      fullName,
      email,
      password,
      mobile,
      address,
    };
    this.authService
      .registerUser(newRegister)
      .subscribe((res: UserRegisterResponse) => {
        console.log(res);
        if (res.status) {
          this.toastr.success(res.message, 'Xin chúc mừng !!!');
          this.router.navigateByUrl('/login');
        } else {
          this.toastr.error(res.message, 'Oops !!!');
        }
      }, (err: any) => {
        if(err.status === 400) {
          this.toastr.error(err.error.message, 'Oops !!!');
        }
      });
  }
}
