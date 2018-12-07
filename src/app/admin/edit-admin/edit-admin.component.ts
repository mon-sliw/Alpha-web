import { Component, OnInit } from '@angular/core';
import {User} from '../../user/User';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DialogService} from '../../dialog.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  login: string;
  changed = false; //todo sprawdź

  user: User = {
    id: 1,
    login: 'admin',
    firstName:'Jan',
    lastName:'Kowalski',
    password: 'admin',
    email: 'admin@admin.com',
    bday: '1970-01-01',
    city: 'Lublin'
  };

  form = this.fb.group({
    login: [this.user.login, [Validators.required]],
    email: [this.user.email, [Validators.required, Validators.email]],
    oldPassword: ['', []],
    newPassword: ['', []],
    repeatPassword: ['', []],
    name: [this.user.firstName, [Validators.required]],
    surname: [this.user.lastName, []],
    city: [this.user.city, []],
    bday: [this.user.bday, [Validators.required]]
  });


  constructor(private fb: FormBuilder, private router: Router, private dialog: DialogService) {
  }

  ngOnInit() {
    this.login = localStorage.getItem('login');
    //TODO http user
  }

  save() {
    this.user.email = this.form.get('email').value;
    this.user.password = this.form.get('password').value;
    this.user.firstName = this.form.get('name').value;
    this.user.lastName = this.form.get('lastName').value;
    this.user.city = this.form.get('city').value;
    this.user.bday = this.form.get('bday').value;

    //TODO http
    this.router.navigate(['/admin/admins']);
  }

  changePassword() {

  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.changed) {
      return true;
    } else {
      return this.dialog.confirm('Czy chcesz wyjść bez zapisania zmian?');
    }
  }

}
