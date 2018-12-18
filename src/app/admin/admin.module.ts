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
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  declarations: [
    AdminPanelComponent,
    AdminsComponent,
    CategoriesComponent,
    UsersComponent,
    ActivitiesComponent,
    RestrictedComponent,
    AddAdminComponent,
    EditAdminComponent,
    EditUserComponent
  ]
})
export class AdminModule { }
