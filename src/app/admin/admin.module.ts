import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminsComponent } from './admins/admins.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { ActivitiesComponent } from './activities/activities.component';
import { RestrictedComponent } from './restricted/restricted.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    AdminPanelComponent,
    AdminsComponent,
    CategoriesComponent,
    UsersComponent,
    ActivitiesComponent,
    RestrictedComponent
  ]
})
export class AdminModule { }
