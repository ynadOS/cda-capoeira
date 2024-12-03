import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfilServiceService {
  baseUrl: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }
  getOneUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/eb03`);
  }
}
