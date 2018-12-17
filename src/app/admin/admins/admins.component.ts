import { Component, OnInit } from '@angular/core';
import {faEdit, faPlus} from '@fortawesome/free-solid-svg-icons';
import {User} from '../../user/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  faPlus = faPlus;
  faEdit = faEdit;
  admins: User[];

  constructor(private router: Router) { }

  ngOnInit() {
    //todo http
    this.admins = [

    ];
  }

  edit(admin: User){
    this.router.navigate(['admin/admins/edit-admin/'+admin.login]);
  }

}
