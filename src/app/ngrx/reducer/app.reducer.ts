import { Action, createReducer, on } from '@ngrx/store';

export interface AppState {
  value: string;
}

const intialState: AppState = {
  value: 'Hi World',
};

const _appReducer = createReducer(intialState);

export function appReducer(
  state:any,
  action: Action
) {
  return _appReducer(state, action);
}
