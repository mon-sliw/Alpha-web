import { Component, OnInit } from '@angular/core';
import {faUsersCog} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  faUsersCog = faUsersCog;

  constructor() { }

  ngOnInit() {
  }

}
