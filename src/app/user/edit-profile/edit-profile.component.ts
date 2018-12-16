import {Component, OnInit} from '@angular/core';
import {User} from '../User';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CanComponentDeactivate} from '../../can-deactivate.guard';
import {DialogService} from '../../dialog.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit, CanComponentDeactivate {

  login: string;
  changed = false; //todo sprawdź

  user: User = {
    id: 1,
    login: 'login',
    email: 'user@user.com',
    password: 'passwd',
    firstName: 'John',
    lastName: 'Doe',
    city: 'City',
    bday: new Date('1970-01-01T12:00:00')
  };

  form = this.fb.group({
    login: [this.user.login, [Validators.required]],
    email: [this.user.email, [Validators.required, Validators.email]],
    oldPassword: ['', []],
    newPassword: ['', []],
    repeatPassword: ['', []],
    firstName: [this.user.firstName, [Validators.required]],
    lastName: [this.user.lastName, []],
    city: [this.user.city, []],
    bday: [this.user.bday.toISOString().substr(0, 10), [Validators.required]]
  });


  constructor(private fb: FormBuilder, private router: Router, private dialog: DialogService) {
  }

  ngOnInit() {
    console.info('bday: ' + this.user.bday.toLocaleDateString());
    this.login = localStorage.getItem('login');
    //TODO http user
  }

  save() {
    this.user.email = this.form.get('email').value;
    this.user.password = this.form.get('password').value;
    this.user.firstName = this.form.get('firstName').value;
    this.user.lastName = this.form.get('lastName').value;
    this.user.city = this.form.get('city').value;
    this.user.bday = new Date(this.form.get('bday').value);

    //TODO http
    this.router.navigate(['/profile']);
  }

  changePassword() {
      //todo http
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.changed) {
      return true;
    } else {
      return this.dialog.confirm('Czy chcesz wyjść bez zapisania zmian?');
    }
  }
}
