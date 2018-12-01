import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

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
  loginOK = false;

  constructor(private fb: FormBuilder, private user: UserService, private router: Router) { }

  ngOnInit() {
  }

  logIn(){
    this.email = this.form.get('email').value;
    this.password = this.form.get('password').value;

    this.user.login(this.email, this.password);

    this.loginOK = this.user.isLoggedIn();
    /*if (this.user.isLoggedIn()) {
      this.router.navigate(['']);
    }*/
  }

}
