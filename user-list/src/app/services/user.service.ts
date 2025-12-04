import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    // Load data from JSON file with 2 second delay
    return this.http.get<User[]>('/mock-users.json').pipe(delay(2000));
  }
}