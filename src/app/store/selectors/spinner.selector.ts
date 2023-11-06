import { SpinnerState } from "../app.interface";
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const SPINNER_STATE_NAME = 'spinner';

const getSpinnerState = createFeatureSelector<SpinnerState>(SPINNER_STATE_NAME);

export const getLoading = createSelector(getSpinnerState, (state) => {
  return state.showLoading;
});
