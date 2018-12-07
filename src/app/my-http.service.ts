import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  public URL = 'http://localhost:8080/api';

  constructor() { }

  getHttpOptions(){
    const authToken = localStorage.getItem('auth_token');
    //console.info('token: '+authToken);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${authToken}`
      })
    };
    return httpOptions;
  }
}
