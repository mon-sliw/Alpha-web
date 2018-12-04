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
    login: 'admin',
    name:'Jan',
    surname:'Kowalski',
    password: 'admin',
    email: 'admin@admin.com',
    bday: '1970-01-01',
    city: 'Lublin'
  };

  form = this.fb.group({
    email: [this.user.email, [Validators.required, Validators.email]],
    oldPassword: ['', []],
    newPassword: ['', []],
    repeatPassword: ['', []],
    name: [this.user.name, [Validators.required]],
    surname: [this.user.surname, []],
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
    this.user.name = this.form.get('name').value;
    this.user.surname = this.form.get('surname').value;
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
