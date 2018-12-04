import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form = this.fb.group({
    searchWords: ['', []],
    category: ['', []],
    city: ['', []],
    date: ['', []]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  search(){

  }

}
