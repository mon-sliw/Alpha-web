import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MyHttpService} from '../my-http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn = false;
  redirectURL = '';
  redirected = false;

  constructor(private http: HttpClient, private myHttp: MyHttpService) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(login, password) {
/* TODO przenieś do rejestracji
   const headers = new HttpHeaders(); //źle
    this.http.post(
      '/api/authenticate',
      {'username': 'userlog',
          'password': 'admin'},
    ).subscribe((res: any) => {
      this.authToken = res.id_token;
    });
    headers.append('Authorization', `Bearer ${this.authToken}`);*/
console.info('login start http');
    return this.http
      .post(
        this.myHttp.URL + '/authenticate',
        { 'username': login,
          'password': password },
      );
  }

  logout(){
    this.redirected = false;

    return this.http.get(this.myHttp.URL + '/logout',
      this.myHttp.getHttpOptions());
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

  isAdmin(){
    return !!localStorage.getItem('admin');
  }

  getAge(bday: Date): number{
    const diff = Math.abs(Date.now() - bday.getDate());
    const age = Math.floor((diff / (1000 * 3600 * 24 * 365)));
    return age;
  }
}
