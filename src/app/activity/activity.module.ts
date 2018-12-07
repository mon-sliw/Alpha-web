import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import {SearchComponent} from './search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { ActivityAddComponent } from './activity-add/activity-add.component';

@NgModule({
  imports: [
    CommonModule,
    ActivityRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    SearchComponent,
    ActivityDetailsComponent,
    ActivityEditComponent,
    ActivityAddComponent
  ]
})
export class ActivityModule { }
