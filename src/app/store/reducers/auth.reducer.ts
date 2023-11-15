import { createReducer, on } from "@ngrx/store";
import { AuthActionType } from "../actions/auth.action";
import { loginUserAction, registerUserAction } from "../actions/auth.action";
import { AppState } from "../app.interface";

const initialState: AppState = {
  loginUser: {}
};

const _authReducer = createReducer(
  initialState,
  on(loginUserAction, (state, loginRes) => {
    return {...state, loginUser: loginRes}
  }),
)

export function authReducer(state: any, action: any) {
  return _authReducer(state, action)
}
