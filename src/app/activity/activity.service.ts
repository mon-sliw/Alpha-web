import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MyHttpService} from '../my-http.service';
import {Observable} from 'rxjs';
import {Category} from '../admin/Category';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient, private myHttp: MyHttpService) { }

  add(name: string, description: string, categoryId: string, datetime: Date, city: string, placeId: string){
    const login = localStorage.getItem('login');
    return this.http.post(this.myHttp.URL + '/events',
      {
        'name': name,
        'city': city,
        'placeId': placeId,
        'description': description,
        'date': datetime.toISOString(),
        'author': login,
        'category': categoryId
      },
      this.myHttp.getHttpOptions());
  }

  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.myHttp.URL + '/category/all',
      this.myHttp.getHttpOptions());
  }
}
