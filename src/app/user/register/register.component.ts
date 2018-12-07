import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {User} from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //TODO validators
  form = this.fb.group({
    login: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    repeatPassword: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: [''],
    city: [''],
    bday: ['', [Validators.required]]
  });
  user: User;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.user = new User();
  }

  submit() {
    console.info('submit');
    this.user.login = this.form.get('login').value;
    this.user.email = this.form.get('email').value;
    this.user.password = this.form.get('password').value;
    this.user.firstName = this.form.get('firstName').value;
    this.user.lastName = this.form.get('lastName').value;
    this.user.city = this.form.get('city').value;
    this.user.bday = new Date(this.form.get('bday').value + 'T00:00:00');

    //TODO http
    //TODO register-ok
  }

}
