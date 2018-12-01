import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  email: String;
  password: String;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  logIn(){
    this.email = this.form.get('email').value;
    this.password = this.form.get('password').value;

    //TODO http
    //TODO routing
  }

}
