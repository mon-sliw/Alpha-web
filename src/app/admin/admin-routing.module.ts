import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {UsersComponent} from './users/users.component';
import {AdminsComponent} from './admins/admins.component';
import {CategoriesComponent} from './categories/categories.component';
import {ActivitiesComponent} from './activities/activities.component';
import {AdminGuard} from '../auth/admin.guard';
import {RestrictedComponent} from './restricted/restricted.component';
import {AddAdminComponent} from './add-admin/add-admin.component';
import {EditAdminComponent} from './edit-admin/edit-admin.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {EditActivityComponent} from './edit-activity/edit-activity.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard], children: [
      {
        path: '', canActivateChild: [AdminGuard], children: [
          {path: 'users', children: [
              {path: '', component: UsersComponent},
              {path: 'edit-userService/:login', component: EditUserComponent}
            ]},
          {path: 'activities', children: [
              {path: '', component: ActivitiesComponent},
              {path: 'edit/:id', component: EditActivityComponent}
            ]},
          {path: 'categories', component: CategoriesComponent},
          {path: 'admins', children: [
              {path: '', component: AdminsComponent},
              {path: 'add-admin', component: AddAdminComponent},
              {path: 'edit-admin/:login', component: EditAdminComponent}
            ]},
          {path: '', redirectTo: '/admin/users', pathMatch: 'full'}
        ]}]},
  {path: 'restricted', component: RestrictedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
