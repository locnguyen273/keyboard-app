import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, map, catchError } from 'rxjs';
import { IUserLogin, UserLoginResponse } from 'src/app/models/user';
import { DOMAIN_URL } from '../config/api';
import { ErrorResponse } from '../config/common';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string | undefined;

  constructor(private http: HttpClient) {}

  login(request: IUserLogin): Observable<UserLoginResponse> {
    return this.http.post<UserLoginResponse>(`${DOMAIN_URL}user/login`, request).pipe(
      map((res) => {
        return res;
      }),
      catchError((error: ErrorResponse) => {
        throw "Invalid username or password";
      })
    );
  }

  logout(): Observable<boolean> {
    return of(false);
  }
}
