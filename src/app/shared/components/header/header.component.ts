import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckTokenService } from 'src/app/shared/services/check-token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showAuthDropdown: boolean = false;
  userLoggedIn: boolean = false;

  constructor(
    private  checkTokenService: CheckTokenService,
    private router: Router,
  ) {
    if(this.checkTokenService.onCheckUserLogin()) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }
  }

  toggleMenu(): void {
    this.showAuthDropdown = !this.showAuthDropdown;
  }

  clickedOutside(): void {
    this.showAuthDropdown = false;
  }

  onLogOut() {
    this.router.navigateByUrl('/login');
    localStorage.removeItem('userInfo');
  }
}
