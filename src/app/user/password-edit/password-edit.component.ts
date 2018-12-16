import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-password-edit',
  templateUrl: './password-edit.component.html',
  styleUrls: ['./password-edit.component.css']
})
export class PasswordEditComponent implements OnInit {

  passwordPattern: string = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+?.,]).{6,25}$';
  form = this.fb.group({
    oldPassword: ['', [Validators.required]],
    newPassword: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
    repeatPassword: ['', [Validators.required, Validators.pattern(this.passwordPattern)]]
  });

  passDiff: boolean = false;
  error = false;

  constructor(private fb: FormBuilder, private router: Router, private user: UserService) {
  }

  ngOnInit() {
  }

  save() {
    let oldP = this.form.get('oldPassword').value;
    let newP = this.form.get('newPassword').value;
    let repeatP = this.form.get('repeatPassword').value;
    if (newP === repeatP) {
      this.passDiff = false;
      this.user.changePassword(oldP, newP).subscribe(() => {
        this.router.navigate(['/profile']);
      }, () => {
        this.error = true;
      });
    } else {
      this.passDiff = true;
    }
  }

}
