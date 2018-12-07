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
        bday: '1970-01-01',
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
        bday: "1999-09-19"
      }
    ]

    //todo http
  }

  edit(user: User){
    this.router.navigate(['admin/users/edit-user/'+user.login]);
  }
}
