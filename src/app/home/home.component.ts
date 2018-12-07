import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date: Date;
  ls: string;
  lds: string;
  lts: string;

  constructor() { }

  ngOnInit() {
    localStorage.setItem('admin', 'true');  //todo usuń
    this.date = new Date("2018-12-07T13:56:41.969Z");
    this.lds = this.date.toLocaleDateString();
    this.ls = this.date.toLocaleString();
    this.lts = this.date.toLocaleTimeString();
  }

}
