import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListUserResponse } from 'src/app/models/user';
import { Store } from '@ngrx/store';
import { SpinnerState } from 'src/app/store/app.interface';
import { DOMAIN_URL } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class ManageUserService {
  constructor(private http: HttpClient, private store: Store<SpinnerState>,) {}

  // Role Admin
  getListUserAdmin(): Observable<ListUserResponse> {
    return this.http.get<ListUserResponse>(`${DOMAIN_URL}user/all-users`);
  }
}
