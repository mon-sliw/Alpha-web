import { Component } from '@angular/core';
import {faCog, faHome, faPowerOff, faSearch, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alpha';
  faHome = faHome;
  faUser = faUser;
  faPowerOff = faPowerOff;
  faSearch = faSearch;
  faCog = faCog;
  isLogged = true;

  logout() {
    this.isLogged = false;
  }

  login() {
    this.isLogged = true;
  }
}
