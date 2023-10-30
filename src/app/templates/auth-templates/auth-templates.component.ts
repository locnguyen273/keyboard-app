import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-templates',
  templateUrl: './auth-templates.component.html',
  styleUrls: ['./auth-templates.component.scss']
})
export class AuthTemplatesComponent {
  title:string = '';

  constructor(private route: ActivatedRoute) {
    this.title = 'Đăng nhập'
    this.checkRouteParam();
  }

  checkRouteParam() {
    this.route.params.subscribe((params: any) => {})
  }
}
