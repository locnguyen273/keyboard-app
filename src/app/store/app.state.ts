import { SpinnerState } from "./app.interface";
import { SpinnerReducer } from "./reducers/loading.reducer";
import { SPINNER_STATE_NAME } from "./selectors/spinner.selector";
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface AppState {
  [SPINNER_STATE_NAME]: SpinnerState,
  router: RouterReducerState,
}

export const appReducer = {
  [SPINNER_STATE_NAME]: SpinnerReducer,
  router: routerReducer,
}
