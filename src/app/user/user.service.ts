import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MyHttpService} from '../my-http.service';
import {Observable} from 'rxjs';


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
    console.info('login start http');
    return this.http
      .post(
        this.myHttp.URL + '/authenticate',
        {
          'username': login,
          'password': password
        },
      );
  }

  logout() {
    this.redirected = false;

    return this.http.get(this.myHttp.URL + '/logout',
      this.myHttp.getHttpOptions());
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  setLoggedInTrue() {
    this.loggedIn = true;
  }

  setLoggedInFalse() {
    this.loggedIn = false;
  }

  isAdmin() {
    return !!localStorage.getItem('admin');
  }

  getAge(bday: Date): number {
    const diff = Math.abs(new Date(Date.now()).getFullYear() - bday.getFullYear());
    // const age = Math.floor((diff / (1000 * 3600 * 24 * 365)));
    return diff;
  }

  getLogin(): string {
    return localStorage.getItem('login');
  }

  getID(): string {
    return localStorage.getItem('id');
  }

  getIDFromLogin(login: string) {
    return this.http.post(
      this.myHttp.URL + '/users/get/id/' + login,
      {'login': login},
      this.myHttp.getHttpOptions());
  }

  register(login: string, email: string, firstName: string, lastName: string, bday: Date, city: string) {
    this.http.post(
      '/api/authenticate',
      {
        'username': 'userlog',
        'password': 'admin'
      }
    ).subscribe((res: any) => {
      let authToken = res.id_token;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        })};
      return this.http.post(this.myHttp.URL + '/users',
        {
          'login': login,
          'firstName': firstName,
          'lastName': lastName,
          'email': email,
          //todo bday i city
          'authorities': ['ROLE_USER']
        },
        httpOptions);
    });
  }

}
