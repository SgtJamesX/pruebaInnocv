import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, CreateUser } from '../interfaces/user';
import { Observable } from 'rxjs';

const headers = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  /**
   * Api url
   */
  baseUrl = 'https://hello-world.innocv.com/api/User';

  constructor(private http: HttpClient) { }


  /**
   * Get all the users from the back
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl, headers);
  }

  /**
   * Get a specific User by his id.
   * @param id Specific id for the user to recover
   */
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  /**
   * Create a new user in the back
   * @param user New user to create
   */
  createUser(user: CreateUser): Observable<any> {
    return this.http.post(this.baseUrl, user, headers);
  }

  /**
   * Update an specific user.
   * @param user user to update
   */
  updateUser(user: User): Observable<any> {
    return this.http.put(this.baseUrl, user, headers);
  }

  /**
   * Delete an user by his id
   * @param id id of the user to delete
   */
  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id, headers);
  }
}


