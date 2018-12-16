import {Component, OnInit} from '@angular/core';
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
  redirected = false;
  url = '';

  constructor(private fb: FormBuilder, protected user: UserService, private router: Router) {
  }

  ngOnInit() {
    this.url = this.user.redirectURL;
    this.user.redirectURL = '';
    this.redirected = this.user.redirected;
    this.user.redirected = false;
  }

  logIn() {
    this.login = this.form.get('login').value;
    this.password = this.form.get('password').value;

    console.info('login: ' + this.login + ', password: ' + this.password);

    this.user.login(this.login, this.password).subscribe((res: any) => {
      if (res) {
        console.info('http sukces');
        localStorage.setItem('auth_token', res.id_token);
        localStorage.setItem('login', this.login);
        localStorage.setItem('admin', 'true');  //todo zmień
        this.user.setLoggedInTrue();
        this.loginOK = this.user.isLoggedIn();
        console.info('loginOK: ' + this.loginOK);
        this.user.getIDFromLogin(this.login).subscribe(res => {
          let id = res.toString();
          localStorage.setItem('id', id);
          if (this.redirected) {
            this.router.navigate([this.url]);
          } else if (this.user.isAdmin()) {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['']);
          }
        });
      }
      return res;
    });
  }

}
