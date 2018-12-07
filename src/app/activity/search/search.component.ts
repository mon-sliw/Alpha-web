import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Activity} from '../Activity';
import {Router} from '@angular/router';
import {Category} from '../../admin/Category';
import {User} from '../../user/User';

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
      author: new User(),
      category: new Category(),
      city: 'Lublin',
      date: new Date('2018-12-12'),
      description: '',
      placeId: '',
      members: []
    },
      {
        id: 2,
        name: "Mamma Mia w Multikinie",
        author: new User(),
        category: new Category(),
        city: 'Lublin',
        date: new Date('2018-12-07'),
        description: '',
        placeId: '',
        members: []
      }];
  }


  details(activity: Activity){
    const id = activity.id;
    this.router.navigate(['/activity/'+id]);
  }
}
