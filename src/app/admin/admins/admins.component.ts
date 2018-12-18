import { Component, OnInit } from '@angular/core';
import {faEdit, faPlus} from '@fortawesome/free-solid-svg-icons';
import {User} from '../../user/User';
import {Router} from '@angular/router';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  faPlus = faPlus;
  faEdit = faEdit;
  admins: User[];

  constructor(private router: Router,
              private user: UserService) { }

  ngOnInit() {
    this.user.getAllAdmins().subscribe((admins)=>{
      this.admins = admins;
    });
  }

  edit(admin: User){
    this.router.navigate(['admin/admins/edit-admin/'+admin.login]);
  }

}
