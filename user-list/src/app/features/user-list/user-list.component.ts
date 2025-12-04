import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User, UserFilters } from '../../models/user.model';
import * as UserActions from '../../store/user.actions';
import * as UserSelectors from '../../store/user.selectors';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  filters$: Observable<UserFilters>;

  emailFilter: string = '';
  statusFilter: boolean | null = null;

  constructor(private store: Store) {
    this.users$ = this.store.select(UserSelectors.selectFilteredUsers);
    this.loading$ = this.store.select(UserSelectors.selectLoading);
    this.error$ = this.store.select(UserSelectors.selectError);
    this.filters$ = this.store.select(UserSelectors.selectFilters);
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());
  }

  filterChange(): void {
    const filters: UserFilters = {};
    
    if (this.emailFilter.trim()) {
      filters.email = this.emailFilter.trim();
    }
    
    if (this.statusFilter !== null) {
      filters.isActive = this.statusFilter;
    }

    this.store.dispatch(UserActions.setFilters({ filters }));
  }

  clearFilters(): void {
    this.emailFilter = '';
    this.statusFilter = null;
    this.store.dispatch(UserActions.clearFilters());
  }
}