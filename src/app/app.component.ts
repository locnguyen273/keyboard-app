import { Component } from '@angular/core';
import { CheckTokenService } from './shared/services/check-token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'keyboard-app';

  constructor(private  checkTokenService: CheckTokenService) {
    this.checkTokenService.oncheckToken();
  }
}
