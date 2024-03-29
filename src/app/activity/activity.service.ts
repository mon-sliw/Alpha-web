import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MyHttpService} from '../my-http.service';
import {Observable} from 'rxjs';
import {Category} from '../admin/Category';
import {Activity} from './Activity';
import {User} from '../user/User';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient, private myHttp: MyHttpService) {
  }

  add(name: string, description: string, categoryId: string, datetime: Date, city: string, placeId: string): Observable<Activity> {
    const login = localStorage.getItem('login');
    return this.http.post<Activity>(
      this.myHttp.URL + '/event',
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

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(
      this.myHttp.URL + '/category/all',
      this.myHttp.getHttpOptions());
  }

  updateCategory(id: string, name: string) {
    return this.http.put(
      this.myHttp.URL + '/category/' + id,
      {
        'name': name
      },
      this.myHttp.getHttpOptions());
  }

  addCategory(name: string) {
    return this.http.post(
      this.myHttp.URL + '/category',
      {
        'name': name
      },
      this.myHttp.getHttpOptions());
  }

  deleteCategory(id: string) {
    return this.http.delete(
      this.myHttp.URL + '/category/' + id,
      this.myHttp.getHttpOptions());
  }

  addMember(activity_id: number, user_id: string) {
    return this.http.post(this.myHttp.URL + '/event/members',
      {
        'eventId': activity_id,
        'userId': user_id
      },
      this.myHttp.getHttpOptions());
  }

  getActivity(id: string): Observable<Activity> {
    return this.http.get<Activity>(this.myHttp.URL + '/event/' + id,
      this.myHttp.getHttpOptions());
  }

  getMembers(id: string): Observable<User[]> {//Observable<User[]>
    return this.http.get<User[]>(this.myHttp.URL + '/event/members/get/' + id,
      this.myHttp.getHttpOptions());
  }

  removeMember(activity_id: string, user_id: string) {
    return this.http.delete(this.myHttp.URL + '/event/members/delete/eventId/'+activity_id+'/userId/'+user_id,
      this.myHttp.getHttpOptions());
  }

  updateActivity(id: string, name: string, description: string, category: number, datetime: Date, city: string, placeId: string) {
    return this.http.put(
      this.myHttp.URL + '/event/' + id,
      {
        'id': id,
        'name': name,
        'city': city,
        'placeId': placeId,
        'description': description,
        'date': datetime.toISOString(),
        'category': category
      },
      this.myHttp.getHttpOptions());
  }

  deleteActivity(id: string) {
    return this.http.delete(this.myHttp.URL + '/event/' + id,
      this.myHttp.getHttpOptions());
  }

  search(searchURL: string): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.myHttp.URL + '/event/filtered' + searchURL,
      this.myHttp.getHttpOptions());
  }
}
