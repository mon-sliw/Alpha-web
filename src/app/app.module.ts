import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
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
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

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
    SearchComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
