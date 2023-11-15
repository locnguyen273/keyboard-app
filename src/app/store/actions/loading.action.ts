import { createAction, props } from '@ngrx/store';
export const SET_LOADING_ACTION = '[spinner state] set loading spinner';
export const SET_HIDE_LOADING_ACTION = '[spinner state] set hide loading spinner';

export const setLoadingSpinner = createAction(
  SET_LOADING_ACTION,
  props<{ status: boolean }>()
);

export const setHideLoadingSpinner = createAction(
  SET_HIDE_LOADING_ACTION,
  props<{ status: boolean }>()
);
