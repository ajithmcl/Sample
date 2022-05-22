import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserRegistration } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.baseUrl;

  isLoading$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  // loader(value: boolean) {
  //   this.isLoading = value;
  // }

  registration(request: IUserRegistration) {
   return this.http.post(`${this.baseUrl}/users`, request)
  }

  login(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }
  getPosts() {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  updateUser(request: IUserRegistration, id: number) {
    return this.http.put(`${this.baseUrl}/users/${id}`, request);
  }
  removeuser(id:number){
    return this.http.delete(`${this.baseUrl}/users/${id}`)
  }
}
