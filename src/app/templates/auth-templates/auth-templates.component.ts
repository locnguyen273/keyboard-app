import { Component } from '@angular/core';
import {
  Router,
  NavigationEnd,
  Event as NavigationEvent,
} from '@angular/router';
import { TITLE_AUTH_STATUS } from 'src/app/core/enums/auth.enum';

@Component({
  selector: 'app-auth-templates',
  templateUrl: './auth-templates.component.html',
  styleUrls: ['./auth-templates.component.scss'],
})
export class AuthTemplatesComponent {
  title: string = '';

  constructor(private router: Router) {
    this.checkRouteParam();
  }

  checkRouteParam() {
    this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationEnd) {
        if (event.url === TITLE_AUTH_STATUS.LOGIN) {
          this.title = 'Đăng nhập';
        } else if (event.url === TITLE_AUTH_STATUS.REGISTER) {
          this.title = 'Đăng ký';
        }
      }
    });
  }
}
