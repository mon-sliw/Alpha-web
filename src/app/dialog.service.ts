import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  confirm(message?: string): Observable<boolean>{
    const confirmation = window.confirm(message || "Czy chcesz opuścić stronę przed zapisaniem zmian?");
    return of(confirmation);
  }
}


