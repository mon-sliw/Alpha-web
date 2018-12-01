import { Component, OnInit } from '@angular/core';
import {User} from '../../User';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  login:string;

  user: User = {
    login: "login",
    email: "user@user.com",
    password: "passwd",
    name: "John",
    surname: "Doe",
    city: "City",
    bday: "01-01-1970"
  };

  form = this.fb.group({
    email: [this.user.email, [Validators.required, Validators.email]],
    oldPassword: ['', [Validators.required]],
    newPassword: ['', [Validators.required]],
    repeatPassword: ['', [Validators.required]],
    name: [this.user.name, [Validators.required]],
    surname: [this.user.surname, []],
    city: [this.user.city, []],
    bday: [this.user.bday, [Validators.required]]
  });


  constructor( private fb:FormBuilder) { }

  ngOnInit() {
    this.login = localStorage.getItem('login');
    //TODO http user
  }

  save(){
    this.user.email = this.form.get('email').value;
    this.user.password = this.form.get('password').value;
    this.user.name = this.form.get('name').value;
    this.user.surname = this.form.get('surname').value;
    this.user.city = this.form.get('city').value;
    this.user.bday = this.form.get('bday').value;

    //TODO http
    //TODO exit
  }

}
