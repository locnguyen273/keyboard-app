import { Component } from '@angular/core';
import { CheckTokenService } from './shared/services/check-token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'keyboard-app';

  constructor(private checkTokenService: CheckTokenService, private router: Router) {
    this.checkTokenService.oncheckToken();
    if(JSON.parse(String(localStorage.getItem('userInfo')))?.role === 'admin') {
      this.router.navigateByUrl('/admin/home')
    }
  }
}
