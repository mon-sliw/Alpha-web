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

const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'register', component: RegisterComponent}, //todo canDeactivate
  {path: 'profile/:login', component: ProfileComponent},
  {path: 'profile', canActivate: [UserGuard], component: ProfileComponent},
  {path: 'profile-edit', canActivate: [UserGuard], canDeactivate: [CanDeactivateGuard], component: EditProfileComponent}, //TODO popraw
  {path: 'register-ok', component: RegisterOkComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'user-deleted', canActivate: [UserGuard], component: UserDeletedComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
