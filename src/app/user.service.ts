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
   const headers = new HttpHeaders(); //źle
    this.http.post(
      '/api/authenticate',
      {'username': 'userlog',
          'password': 'userlog'},
    ).subscribe((res: any) => {
      this.authToken = res.id_token;
    });
    headers.append('Authorization', `Bearer ${this.authToken}`);*/
console.info('login start http');
    return this.http
      .post(
        'http://localhost:8080/api/authenticate',
        { 'username': login,
          'password': password },
      );
  }

  logout(){
    const authToken = localStorage.getItem('auth_token');
    console.info('token: '+authToken);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${authToken}`
      })
    };
    return this.http.get('http://localhost:8080/api/logout',
      httpOptions);
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  setLoggedInTrue(){
    this.loggedIn = true;
  }

  setLoggedInFalse(){
    this.loggedIn = false;
  }
}
