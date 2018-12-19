import { Component, OnInit } from '@angular/core';
import {User} from '../../user/User';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogService} from '../../dialog.service';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  login: string;
  changed = false; //todo sprawdź

  user: User;

  form = this.fb.group({
    login: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', [Validators.required]],
    lastName: ['', []],
    city: ['', []],
    bday: ['', [Validators.required]]
  });


  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: DialogService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.login = this.route.snapshot.paramMap.get('login');
    this.userService.getUser(this.login).subscribe(user => {
        this.user = user;
        this.user.bday = new Date(user.bday);
        this.form.get('login').setValue(this.user.login);
        this.form.get('email').setValue(this.user.email);
        this.form.get('firstName').setValue(this.user.firstName);
        this.form.get('lastName').setValue(this.user.lastName);
        this.form.get('city').setValue(this.user.city);
        this.form.get('bday').setValue(this.user.bday.toISOString().substr(0, 10));
      }
    )
  }

  save() {
    this.user.email = this.form.get('email').value;
    this.user.firstName = this.form.get('firstName').value;
    this.user.lastName = this.form.get('lastName').value;
    this.user.city = this.form.get('city').value;
    this.user.bday = new Date(this.form.get('bday').value + 'T12:00:00');

    this.userService.updateProfile(this.user.id, this.user.login, this.user.email, this.user.firstName, this.user.lastName, this.user.city, this.user.bday, this.user.authorities).subscribe(() => {
      this.router.navigate(['/admin/users']);
    });
  }
}
