import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {User} from '../../user/User';
import {UserService} from '../../user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  //TODO validators
  form = this.fb.group({
    login: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', [Validators.required]],
    lastName: [''],
    city: [''],
    bday: ['', [Validators.required]]
  });
  user: User;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.user = new User();
  }

  submit() {
    console.info('submit');
    const login = this.form.get('login').value;
    const email = this.form.get('email').value;
    const firstName = this.form.get('firstName').value;
    const lastName = this.form.get('lastName').value;
    const city = this.form.get('city').value;
    const bday = new Date(this.form.get('bday').value + 'T12:00:00');

    this.userService.registerAdmin(login, email, firstName, lastName, bday, city).subscribe(()=>{
      this.router.navigate(['/admin/admins']);
    });
  }
}
