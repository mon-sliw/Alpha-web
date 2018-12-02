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
    login: ['', Validators.required],
    password: ['', Validators.required]
  });

  login: string;
  password: string;
  loginOK = false;
  constructor(private fb: FormBuilder, private user: UserService, private router: Router) { }

  ngOnInit() {
  }

  logIn(){
    this.login = this.form.get('login').value;
    this.password = this.form.get('password').value;

    console.info('login: '+this.login+', password: '+this.password);

    this.user.login(this.login, this.password).subscribe((res: any) => {
      if (res) {
        console.info('http sukces');
        localStorage.setItem('auth_token', res.id_token);
        localStorage.setItem('login', this.login);
        this.user.setLoggedInTrue();
        this.loginOK = this.user.isLoggedIn();
        console.info('loginOK: '+this.loginOK);
        this.router.navigate(['']);
      }
      return res;
    });
  }

}
