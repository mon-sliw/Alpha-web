import { Component, OnInit } from '@angular/core';
import {faEdit, faPlus} from '@fortawesome/free-solid-svg-icons';
import {User} from '../../user/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  faPlus = faPlus;
  faEdit = faEdit;

  users: User[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.users = [
      {
        login: 'admin',
        name:'Jan',
        surname:'Kowalski',
        password: 'admin',
        email: 'admin@admin.com',
        bday: '1970-01-01',
        city: 'Lublin'
      },
      {
        login: "john_d",
        email: "user@user.com",
        password: "passwd",
        name: "John",
        surname: "Doe",
        city: "City",
        bday: "1999-09-19"
      }
    ]
  }

  edit(admin: User){
    //todo popraw
    this.router.navigate(['admin/users/edit-user/'+admin.login]);
  }
}
