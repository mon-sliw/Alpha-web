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

  constructor(private fb: FormBuilder, protected userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.url = this.userService.redirectURL;
    this.userService.redirectURL = '';
    this.redirected = this.userService.redirected;
    this.userService.redirected = false;
  }

  logIn() {
    this.login = this.form.get('login').value;
    this.password = this.form.get('password').value;
    this.userService.login(this.login, this.password).subscribe((res: any) => {
      if (res) {
        localStorage.setItem('auth_token', res.id_token);
        localStorage.setItem('login', this.login);
        this.userService.setLoggedInTrue();
        this.loginOK = this.userService.isLoggedIn();
        this.userService.getIDFromLogin(this.login).subscribe(res => {
          let id = res.toString();
          localStorage.setItem('id', id);
          this.userService.checkIfAdmin(this.login).subscribe(res => {
            if (res.toString().includes("true")){
              localStorage.setItem('admin', 'true');
            }
            if (this.redirected) {
              this.router.navigate([this.url]);
            } else if (this.userService.isAdmin()) {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['']);
            }
           });
        });
      }
    });
  }

}
