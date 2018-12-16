import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email = new FormControl('', [Validators.email, Validators.required]);
  emailOK = true;

  constructor(private user: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  send() {
    this.user.forgotPassword(this.email.value).subscribe(() => {
      this.router.navigate(['/forgot-password-ok']);
    }, () => {
      this.emailOK = false;
    });
  }
}
