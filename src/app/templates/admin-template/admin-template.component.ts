import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.interface';
import { getLoading } from 'src/app/store/selectors/spinner.selector';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.scss']
})
export class AdminTemplateComponent implements OnInit {
  showLoading?: Observable<boolean>;
  showUserProfileDropdown: boolean = false;
  search : String ="";
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
  }

  toggleMenu(): void {
    this.showUserProfileDropdown = !this.showUserProfileDropdown;
  }

  clickedOutside(): void {
    this.showUserProfileDropdown = false;
  }
}
