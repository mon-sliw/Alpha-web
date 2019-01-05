import {Component, OnInit} from '@angular/core';
import {User} from '../User';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CanComponentDeactivate} from '../../can-deactivate.guard';
import {DialogService} from '../../dialog.service';
import {Observable} from 'rxjs';
import {UserService} from '../user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit, CanComponentDeactivate {

  login: string;
  changed = false; //todo ew sprawdź

  user: User /*= {
    id: 1,
    login: 'login',
    email: 'userService@userService.com',
    password: 'passwd',
    firstName: 'John',
    lastName: 'Doe',
    city: 'City',
    bday: new Date('1970-01-01T12:00:00')
  }*/;

  form = this.fb.group({
    login: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', [Validators.required]],
    lastName: ['', []],
    city: ['', []],
    bday: ['', [Validators.required]]
  });


  constructor(private fb: FormBuilder, private router: Router, private dialog: DialogService, private userService: UserService) {
  }

  ngOnInit() {
    // console.info('bday: ' + this.userService.bday.toLocaleDateString());
    this.login = this.userService.getLogin();
    this.userService.getUser(this.login).subscribe((user)=>{
      this.user = user;
      this.user.bday = new Date(user.bday);
      this.form.get('login').setValue(this.user.login);
      this.form.get('email').setValue(this.user.email);
      this.form.get('firstName').setValue(this.user.firstName);
      this.form.get('lastName').setValue(this.user.lastName);
      this.form.get('city').setValue(this.user.city);
      this.form.get('bday').setValue(this.user.bday.toISOString().substr(0, 10));
    })
  }

  save() {
    this.user.email = this.form.get('email').value;
    this.user.firstName = this.form.get('firstName').value;
    this.user.lastName = this.form.get('lastName').value;
    this.user.city = this.form.get('city').value;
    this.user.bday = new Date(this.form.get('bday').value);

    this.userService.updateProfile(this.user.id, this.user.login, this.user.email, this.user.firstName, this.user.lastName, this.user.city, this.user.bday, this.user.authorities).subscribe(() => {
      console.info("zmieniono dane profilu");
      this.router.navigate(['/profile']);
    });
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.changed) {
      return true;
    } else {
      return this.dialog.confirm('Czy chcesz wyjść bez zapisania zmian?');
    }
  }
}
