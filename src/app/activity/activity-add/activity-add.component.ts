import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Activity} from '../Activity';

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.css']
})
export class ActivityAddComponent implements OnInit {

  form = this.fb.group({
    name: ['',[Validators.required]],
    description: ['', [Validators.required]],
    category: ['', [Validators.required]],
    datetime: [Date.now().toString(), [Validators.required]]
    }
  );

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  add(){
    const name = this.form.get('name').value;
    const description = this.form.get('description').value;
    const category = this.form.get('category').value;
    const datetime = new Date(this.form.get('datetime').value);
  }
}
