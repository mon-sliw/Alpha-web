import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.css']
})
export class ActivateUserComponent implements OnInit {

  passwordPattern: string = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+?.,]).{6,25}$';
  form = this.fb.group({
    newPassword: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
    repeatPassword: ['', [Validators.required, Validators.pattern(this.passwordPattern)]]
  });

  passDiff: boolean = false;
  error = false;

  constructor(private fb: FormBuilder, private router: Router, private user: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  save() {
    let newP = this.form.get('newPassword').value;
    let repeatP = this.form.get('repeatPassword').value;
    if (newP === repeatP) {
      this.passDiff = false;
      let key = this.route.snapshot.paramMap.get('key');
        this.user.activate(key, newP).subscribe(() => {
        this.router.navigate(['/profile']);
      }, () => {
        this.error = true;
      });
    } else {
      this.passDiff = true;
    }
  }

}
