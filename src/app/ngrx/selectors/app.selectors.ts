import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../reducer/app.reducer';

export const selectFeature = createFeatureSelector<AppState>('app');

export const selectValue = createSelector(selectFeature, (state: AppState) => {
  return state.value;
});
