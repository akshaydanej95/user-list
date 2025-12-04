export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
}

export interface UserFilters {
  email?: string;
  isActive?: boolean | null;
}

export interface UserState {
  users: User[];
  filteredUsers: User[];
  filters: UserFilters;
  loading: boolean;
  error: string | null;
}