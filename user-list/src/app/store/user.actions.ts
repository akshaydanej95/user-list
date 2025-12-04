import { createAction, props } from '@ngrx/store';
import { User, UserFilters } from '../models/user.model';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);
export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: string }>()
);

export const setFilters = createAction(
  '[User] Set Filters',
  props<{ filters: UserFilters }>()
);

export const clearFilters = createAction('[User] Clear Filters');