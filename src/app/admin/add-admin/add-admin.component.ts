import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {User} from '../../user/User';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.user = new User();
  }

  submit() {
//    console.info('submit');
    this.user.email = this.form.get('email').value;
    this.user.password = this.form.get('password').value;
    this.user.firstName = this.form.get('name').value;
    this.user.lastName = this.form.get('lastName').value;
    this.user.city = this.form.get('city').value;
    this.user.bday = new Date(this.form.get('bday').value + 'T12:00:00');
    // this.submitted = true;

    //TODO http
    //TODO register-ok
  }
}
