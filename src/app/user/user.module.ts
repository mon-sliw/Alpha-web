import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {RegisterOkComponent} from './register-ok/register-ok.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {LogoutComponent} from './logout/logout.component';
import {UserDeletedComponent} from './user-deleted/user-deleted.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PasswordEditComponent} from './password-edit/password-edit.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EditProfileComponent,
    RegisterOkComponent,
    ForgotPasswordComponent,
    LogoutComponent,
    UserDeletedComponent,
    PasswordEditComponent,
  ]
})
export class UserModule {
}
