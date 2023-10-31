import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CheckTokenService {
  constructor(private router: Router) {}

  private tokenExpired(token: string) {
    const expire = JSON.parse(atob(token.split('.')[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expire;
  }

  oncheckToken(): void {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      if (!this.tokenExpired(JSON.parse(String(userInfo))?.token)) {
        this.router.navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/login');
      }
    } else {
      this.router.navigateByUrl('/');
    }
  }

  onCheckUserLogin() {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      if (!this.tokenExpired(JSON.parse(String(userInfo))?.token)) {
        this.router.navigateByUrl('/');
        return true;
      } else return false;
    }
    return false;
  }
}
