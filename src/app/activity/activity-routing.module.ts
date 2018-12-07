import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {ActivityDetailsComponent} from './activity-details/activity-details.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'activity/:id', component: ActivityDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
