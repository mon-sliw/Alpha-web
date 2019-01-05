import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {RegisterOkComponent} from './register-ok/register-ok.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {LogoutComponent} from './logout/logout.component';
import {UserDeletedComponent} from './user-deleted/user-deleted.component';
import {UserGuard} from '../auth/user.guard';
import {CanDeactivateGuard} from '../can-deactivate.guard';
import {PasswordEditComponent} from './password-edit/password-edit.component';
import {ForgotPasswordOkComponent} from './forgot-password-ok/forgot-password-ok.component';
import {ActivateUserComponent} from './activate-user/activate-user.component';

const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/:login', component: ProfileComponent},
  {path: 'profile', canActivate: [UserGuard], component: ProfileComponent},
  {path: 'profile-edit', canActivate: [UserGuard], canDeactivate: [CanDeactivateGuard], component: EditProfileComponent},
  {path: 'register-ok', component: RegisterOkComponent},
  {path: 'activate-user/:key', component: ActivateUserComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'userService-deleted', canActivate: [UserGuard], component: UserDeletedComponent},
  {path: 'password-edit', canActivate: [UserGuard], component: PasswordEditComponent},
  {path: 'forgot-password-ok', component: ForgotPasswordOkComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
