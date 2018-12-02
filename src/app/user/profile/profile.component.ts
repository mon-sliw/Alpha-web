import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  login = "";

  user: User = {
    login: "login",
    email: "user@user.com",
    password: "passwd",
    name: "John",
    surname: "Doe",
    city: "City",
    bday: "01-01-1970"
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.login = this.route.snapshot.paramMap.get('login');
     if (this.login == null){
       this.login = localStorage.getItem('login');
     }

    //TODO http
  }

  delete(){

  }

}
