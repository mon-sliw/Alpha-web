import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserModule} from './user/user.module';
import {AdminModule} from './admin/admin.module';
import {ActivityModule} from './activity/activity.module';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    UserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    ActivityModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4ELeMqL3I8h0qEv5PWlzDecGIAvz2oO0',
      libraries: ['places']
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
