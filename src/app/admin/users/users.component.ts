import {Component, OnInit} from '@angular/core';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {User} from '../../user/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  faEdit = faEdit;

  users: User[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.users = [
      {
        id: 1,
        login: 'admin',
        firstName:'Jan',
        lastName:'Kowalski',
        password: 'admin',
        email: 'admin@admin.com',
        bday: new Date('1970-01-01T12:00:00'),
        city: 'Lublin'
      },
      {
        id: 2,
        login: "john_d",
        email: "user@user.com",
        password: "passwd",
        firstName: "Anna",
        lastName: "Nowak",
        city: "City",
        bday: new Date("1999-09-19" + 'T12:00:00')
      }
    ]

    //todo http
  }

  edit(user: User){
    this.router.navigate(['admin/users/edit-user/'+user.login]);
  }
}
