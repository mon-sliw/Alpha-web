import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {ActivityDetailsComponent} from './activity-details/activity-details.component';
import {ActivityAddComponent} from './activity-add/activity-add.component';
import {UserGuard} from '../auth/user.guard';
import {ActivityEditComponent} from './activity-edit/activity-edit.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'activity/:id', component: ActivityDetailsComponent},
  {path: 'add-activity', component: ActivityAddComponent, canActivate: [UserGuard]},
  {path: 'edit-activity/:id', component: ActivityEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
