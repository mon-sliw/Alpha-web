import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivityService} from '../activity.service';
import {Category} from '../../admin/Category';

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.css']
})
export class ActivityAddComponent implements OnInit {

  form = this.fb.group({
    name: ['',[Validators.required]],
    description: ['', [Validators.required]],
    category: ['', [Validators.required, Validators.minLength(1)]],
    datetime: [(new Date(Date.now()).toISOString()).substr(0, 16), [Validators.required]]
    }
  );

  categories: Category[];

  constructor(private fb: FormBuilder, private activityService: ActivityService) { }

  ngOnInit() {
    /*this.categories = [
      {id: 1, name: 'bla bla'},
      {id: 2, name: 'bvc,jmhngbvfdcsxacdvfbgnhjmk,l.o;k,jmhngbfvdcsxadsx'}
    ];*/
    this.activityService.getAllCategories().subscribe(
      categories =>
    {this.categories = categories;
    console.info('got categories')});
  }

  add(){
    const name = this.form.get('name').value;
    const description = this.form.get('description').value;
    const category = this.form.get('category').value;
    const datetime = new Date(this.form.get('datetime').value);
    //todo google API
    const placeId = '';
    const city = '';
    this.activityService.add(name, description, category, datetime, city, placeId);
  }
}
