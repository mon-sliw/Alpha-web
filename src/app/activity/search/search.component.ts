import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Activity} from '../Activity';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form = this.fb.group({
    searchWords: ['', []],
    category: ['', []],
    city: ['', []],
    date: ['', []]
  });

  activities: Activity[];
  searchDone = false;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
  }

  search() {
    //todo http
    this.searchDone = true;
    this.activities = [{
      id: 1,
      name: 'Zagraj w tenisa',
      authorId: 1,
      categoryId: 1,
      city: 'Lublin',
      date: new Date('2018-12-12'),
      description: '',
      placeId: ''
    },
      {
        id: 2,
        name: "Mamma Mia w Multikinie",
        authorId: 2,
        categoryId: 2,
        city: 'Lublin',
        date: new Date('2018-12-07'),
        description: '',
        placeId: ''
      }];
  }


  details(activity: Activity){
    const id = activity.id;
    this.router.navigate(['/activity/'+id]);
  }
}
