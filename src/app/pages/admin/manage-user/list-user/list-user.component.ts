import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ManageUserService } from 'src/app/core/services/manage-user.service';
import { SET_HIDE_LOADING_ACTION } from 'src/app/store/actions/loading.action';
import { AppState } from 'src/app/store/app.interface';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {
  constructor(private manageUserService: ManageUserService, private store: Store<AppState>) {
    manageUserService.getListUserAdmin().subscribe(res => {
      console.log(res);
      if(res.status) {
        this.store.dispatch({
          type: SET_HIDE_LOADING_ACTION, status: false
        })
      }
    })
  }
}
