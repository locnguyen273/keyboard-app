import { setHideLoadingSpinner, setLoadingSpinner } from "../actions/loading.action";
import { createReducer, on } from "@ngrx/store";
import { SpinnerState } from "../app.interface";

const initialState: SpinnerState = {
  showLoading: false,
};

const _spinnerReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(setHideLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
);

export function SpinnerReducer(state: any, action: any) {
  return _spinnerReducer(state, action)
}
