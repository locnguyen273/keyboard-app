import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, debounceTime, map } from 'rxjs';
import { ListUserResponse } from 'src/app/models/user';
import { ErrorResponse } from '../config/common';
import { Store } from '@ngrx/store';
import { SpinnerState } from 'src/app/store/app.interface';
import { SET_LOADING_ACTION } from 'src/app/store/actions/loading.action';

@Injectable({
  providedIn: 'root',
})
export class ManageUserService {
  constructor(private http: HttpClient, private store: Store<SpinnerState>,) {}

  // Role Admin
  getListUserAdmin(): Observable<ListUserResponse> {
    return this.http
      .get<ListUserResponse>(`http://localhost:5000/api/user/all-users`)
      .pipe(
        debounceTime(30000),
        map((res) => {
          this.store.dispatch({
            type: SET_LOADING_ACTION, status: true
          })
          return res;
        }),
        catchError((error: ErrorResponse) => {
          throw error;
        })
      );
  }
}
