import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn = false;

  constructor(private http: HttpClient) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(login, password) {
/* TODO przenieś do rejestracji
   const headers = new HttpHeaders();
    this.http.post(
      '/api/authenticate',
      {'username': 'userlog',
          'password': 'userlog'},
    ).subscribe((res: any) => {
      this.authToken = res.id_token;
    });
    headers.append('Authorization', `Bearer ${this.authToken}`);*/

    return this.http
      .post(
        '/api/authenticate',
        { 'username': login,
          'password': password },
      )
      .subscribe((res: any) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.id_token);
          localStorage.setItem('login', login);
          this.loggedIn = true;
        }
        return res.success;
      });
  }

  logout(){
    //TODO http
    localStorage.removeItem('auth_token');
    localStorage.removeItem('login');
    this.loggedIn = false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }
}
