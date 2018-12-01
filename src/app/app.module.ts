import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {ProfileComponent} from './user/profile/profile.component';
import {EditProfileComponent} from './user/edit-profile/edit-profile.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterOkComponent} from './user/register-ok/register-ok.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { LogoutComponent } from './user/logout/logout.component';
import { UserDeletedComponent } from './user/user-deleted/user-deleted.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminPanelComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EditProfileComponent,
    RegisterOkComponent,
    ForgotPasswordComponent,
    LogoutComponent,
    UserDeletedComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
