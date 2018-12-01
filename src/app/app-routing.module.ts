import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {RegisterOkComponent} from './register-ok/register-ok.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {LogoutComponent} from './logout/logout.component';
import {UserDeletedComponent} from './user-deleted/user-deleted.component';
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
