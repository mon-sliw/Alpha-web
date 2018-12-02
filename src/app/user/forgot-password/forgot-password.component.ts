import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email = new FormControl('', [Validators.email, Validators.required]);
  emailOK = true;

  constructor() { }

  ngOnInit() {
  }

  send(){
    //this.email.value
    //TODO http
    this.emailOK = false;
  }

}
