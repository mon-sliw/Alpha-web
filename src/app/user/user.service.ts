import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MyHttpService} from '../my-http.service';
import {Observable} from 'rxjs';
import {User} from './User';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn = false;
  redirectURL = '';
  redirected = false;

  constructor(private http: HttpClient, private myHttp: MyHttpService, private router: Router) {
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
    return this.http.get(
      this.myHttp.URL + '/users/get/id/' + login,
      this.myHttp.getHttpOptions());
  }

  register(login: string, email: string, firstName: string, lastName: string, bday: Date, city: string) {
    this.http.post(
      this.myHttp.URL + '/authenticate',
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
        })
      };
      this.http.post(this.myHttp.URL + '/users',
        {
          'login': login,
          'firstName': firstName,
          'lastName': lastName,
          'email': email,
          'city': city,
          'bday': bday,
          'authorities': ['ROLE_USER']
        },
        httpOptions).subscribe(() => {
        this.router.navigate(['/register-ok']);
      });
    });
  }

  changePassword(oldPassword: string, newPassword: string) {
    return this.http.post(this.myHttp.URL + '/account/change-password',
      {
        'currentPassword': oldPassword,
        'newPassword': newPassword
      },
      this.myHttp.getHttpOptions());
  }

  updateProfile(id: number, login: string, email: string, firstName: string, lastName: string, city: string, bday: Date, authorities) {
    return this.http.put(this.myHttp.URL + '/users',
      {
        'id': id,
        'login': login,
        'city': city,
        'email': email,
        'active': true,
        'firstName': firstName,
        'lastName': lastName,
        'bday': bday.toISOString(),
        'authorities': authorities
        //'authorities': ['ROLE_USER']
      },
      this.myHttp.getHttpOptions()
    );
  }

  forgotPassword(email: string) {
    return this.http.post(this.myHttp.URL + '/account/reset-password/init',
      {'email': email},
      this.myHttp.getHttpOptions());
  }

  getUser(login: string): Observable<User> {
    return this.http.get<User>(this.myHttp.URL + '/users/' + login,
      this.myHttp.getHttpOptions());
  }

  deleteUser(login: string) {
    return this.http.get(this.myHttp.URL + '/deactivate/' + login,
      this.myHttp.getHttpOptions());
  }

  checkIfAdmin(login: string) {
    return this.http.get(this.myHttp.URL + '/users/check/' + login,
      this.myHttp.getHttpOptions());
  }

  getAllAdmins(): Observable<User[]>{
    return this.http.get<User[]>(this.myHttp.URL+'/users/admins',
      this.myHttp.getHttpOptions());
  }


  registerAdmin(login: string, email: string, firstName: string, lastName: string, bday: Date, city: string) {
  return this.http.post(this.myHttp.URL + '/users',
    {
      'login': login,
      'firstName': firstName,
      'lastName': lastName,
      'email': email,
      'city': city,
      'bday': bday,
      'authorities': ['ROLE_ADMIN']
    },
    this.myHttp.getHttpOptions());
  }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.myHttp.URL+'/users',
      this.myHttp.getHttpOptions());
  }
  }
