import { createReducer, on } from '@ngrx/store';
import { User, UserState, UserFilters } from '../models/user.model';
import * as UserActions from './user.actions';

export const initialState: UserState = {
  users: [],
  filteredUsers: [],
  filters: {},
  loading: false,
  error: null
};

const filterUsers = (users: User[], filters: UserFilters): User[] => {
  return users.filter(user => {
    const emailMatch = !filters.email || 
      user.email.toLowerCase().includes(filters.email.toLowerCase());
    
    const statusMatch = filters.isActive === null || filters.isActive === undefined || 
      user.isActive === filters.isActive;
    
    return emailMatch && statusMatch;
  });
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    filteredUsers: filterUsers(users, state.filters),
    loading: false,
    error: null
  })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(UserActions.setFilters, (state, { filters }) => ({
    ...state,
    filters,
    filteredUsers: filterUsers(state.users, filters)
  })),
  on(UserActions.clearFilters, state => ({
    ...state,
    filters: {},
    filteredUsers: state.users
  }))
);