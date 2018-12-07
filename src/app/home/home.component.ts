import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: Date;

  constructor() {
  }

  ngOnInit() {
    localStorage.setItem('admin', 'true');  //todo usuń
    this.data = new Date(Date.now());

  }

}
