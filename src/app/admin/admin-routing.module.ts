import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {UsersComponent} from './users/users.component';
import {AdminsComponent} from './admins/admins.component';
import {CategoriesComponent} from './categories/categories.component';
import {ActivitiesComponent} from './activities/activities.component';
import {AdminGuard} from '../auth/admin.guard';
import {RestrictedComponent} from './restricted/restricted.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        canActivateChild: [AdminGuard],
        children: [
          {path: 'users', component: UsersComponent},
          {path: 'activities', component: ActivitiesComponent},
          {path: 'categories', component: CategoriesComponent},
          {path: 'admins', component: AdminsComponent},
          {path: '', redirectTo: '/admin/users', pathMatch: 'full'}
        ]
      }
    ]
  },
  {path: 'restricted', component: RestrictedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
