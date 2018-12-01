import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //TODO validators
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    repeatPassword: ['', [Validators.required]],
    name: ['', [Validators.required]],
    surname: [''],
    city: [''],
    bday: ['', [Validators.required]]
  });
  user: User;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.user = new User();
  }

  submit() {
//    console.info('submit');
    this.user.email = this.form.get('email').value;
    this.user.password = this.form.get('password').value;
    this.user.name = this.form.get('name').value;
    this.user.surname = this.form.get('surname').value;
    this.user.city = this.form.get('city').value;
    this.user.bday = this.form.get('bday').value;
    // this.submitted = true;

    //TODO http
    //TODO register-ok
  }

}
