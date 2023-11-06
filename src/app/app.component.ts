import { Component, OnInit } from '@angular/core';
import { CheckTokenService } from './shared/services/check-token.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { getLoading } from './store/selectors/spinner.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'keyboard-app';
  showLoading?: Observable<boolean>;

  constructor(
    private checkTokenService: CheckTokenService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.checkTokenService.oncheckToken();
    if (
      JSON.parse(String(localStorage.getItem('userInfo')))?.role === 'admin'
    ) {
      this.router.navigateByUrl('/admin');
    } else {
      this.router.navigateByUrl('/');
    }
  }

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
  }
}
