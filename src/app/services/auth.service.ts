import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _apiurl: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  public login(userInfo: User) {
    return this.http.post(`${this._apiurl}/user/login`, userInfo);
  }

  public signup(userInfo: User) {
    return this.http.post(`${this._apiurl}/user/signup`, userInfo);
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('USER_ID');
    localStorage.removeItem('USER_EMAIL');
  }

  public getUser() {
    let userId = localStorage.getItem("USER_ID");
    return this.http.get(`${this._apiurl}/user/${userId}`);
  }

  public updateUser(userInfo: User) {
    let userId = localStorage.getItem("USER_ID");
    return this.http.patch(`${this._apiurl}/user/${userId}`, userInfo);
  } 
  
}
