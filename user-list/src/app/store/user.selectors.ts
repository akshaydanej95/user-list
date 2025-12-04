import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from '../models/user.model';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);

export const selectFilteredUsers = createSelector(
  selectUserState,
  (state: UserState) => state.filteredUsers
);

export const selectFilters = createSelector(
  selectUserState,
  (state: UserState) => state.filters
);

export const selectLoading = createSelector(
  selectUserState,
  (state: UserState) => state.loading
);

export const selectError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);