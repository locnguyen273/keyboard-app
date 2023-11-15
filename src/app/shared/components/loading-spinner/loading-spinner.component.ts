import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getLoading } from 'src/app/store/selectors/spinner.selector';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit {
  showLoading?: Observable<boolean>;
  constructor(private store: Store<AppState>) {
    this.showLoading = this.store.select(getLoading);
  }

  ngOnInit(): void {
  }
}
