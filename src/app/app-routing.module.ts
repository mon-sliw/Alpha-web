import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {ProfileComponent} from './user/profile/profile.component';
import {EditProfileComponent} from './user/edit-profile/edit-profile.component';
import {RegisterOkComponent} from './user/register-ok/register-ok.component';
import {ForgotPasswordComponent} from './user/forgot-password/forgot-password.component';
import {LogoutComponent} from './user/logout/logout.component';
import {UserDeletedComponent} from './user/user-deleted/user-deleted.component';
import {SearchComponent} from './search/search.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminPanelComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/:login', component: ProfileComponent},
  {path: 'profile-edit', component: EditProfileComponent}, //TODO popraw
  {path: 'register-ok', component: RegisterOkComponent},
  {path: 'forgot-password', component:ForgotPasswordComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'user-deleted', component: UserDeletedComponent},
  {path: 'search', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
