import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /**
   *
   */
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {

    console.log("loginUser",this.store.pipe(select('loginUser')));
  }
}
