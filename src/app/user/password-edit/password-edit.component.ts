import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-password-edit',
  templateUrl: './password-edit.component.html',
  styleUrls: ['./password-edit.component.css']
})
export class PasswordEditComponent implements OnInit {

  form = this.fb.group({
    oldPassword: ['', [Validators.required]],
    newPassword: ['', [Validators.required]],
    repeatPassword: ['', [Validators.required]]
  });

  passDiff: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  save(){
    let oldP = this.form.get('oldPassword').value;
    let newP = this.form.get('newPassword').value;
    let repeatP = this.form.get('repeatPassword').value;
    if(newP===repeatP) {
      this.passDiff = false;
      //todo http
      this.router.navigate(['/profile']);
    }else {
      this.passDiff = true;
    }
  }

}
