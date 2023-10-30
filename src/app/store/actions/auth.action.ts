import { createAction, props } from "@ngrx/store";

export enum AuthActionType {
  LOGIN_USER = '[AUTH] Login User',
  REGISTER_USER = '[AUTH] Register User',
}

export const loginUserAction = createAction(AuthActionType.LOGIN_USER, props<{loginRes: any}>());
export const registerUserAction = createAction(AuthActionType.REGISTER_USER);
