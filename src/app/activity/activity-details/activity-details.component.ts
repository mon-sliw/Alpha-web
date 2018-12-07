import {Component, OnInit} from '@angular/core';
import {Activity} from '../Activity';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../user/User';
import {Category} from '../../admin/Category';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {

  activity: Activity;
  id: string;
  members: User[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    this.activity = {
      id: 1,
      name: 'Zagraj w tenisa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor, lectus in tincidunt ornare, nunc purus faucibus dui, sed venenatis nibh turpis sed orci. Nunc ac massa dui. Donec feugiat velit ligula, eu ullamcorper lacus placerat sit amet. Suspendisse potenti. Vivamus suscipit justo eu lectus dapibus scelerisque. Donec in turpis et dui consequat vulputate a sit amet magna. Duis vitae vestibulum nulla. Ut sit amet ex rutrum, sollicitudin arcu non, commodo lectus.',
      author: new User(),
      category: new Category(),
      city: 'Lublin',
      date: new Date('2018-12-12'),
      placeId: '',
      members: []
    };
    this.members = [
      {
        id: 1,
        login: 'admin',
        firstName:'Jan',
        lastName:'Kowalski',
        password: 'admin',
        email: 'admin@admin.com',
        bday: new Date('1970-01-01' + 'T00:00:00Z'),
        city: 'Lublin'
      },
      {
        id: 2,
        login: "john_d",
        email: "user@user.com",
        password: "passwd",
        firstName: "John",
        lastName: "Doe",
        city: "City",
        bday: new Date("1999-09-19" + 'T00:00:00Z')
      }
    ]
    //todo http
    //todo get author
  }

}
