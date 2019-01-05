import {Component} from '@angular/core';
import {faCog, faHome, faPlus, faPowerOff, faSearch, faUser} from '@fortawesome/free-solid-svg-icons';
import {UserService} from './user/user.service';
import {Router} from '@angular/router';

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
  faPlus = faPlus;

  constructor(protected userService: UserService, private router: Router) {
  }

  logout() {
    if (confirm('Czy na pewno chcesz się wylogować?')) {
      this.userService.logout().subscribe((res: any) => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('login');
        localStorage.removeItem('id');
        if (!!localStorage.getItem('admin'))
          localStorage.removeItem('admin');
        this.userService.setLoggedInFalse();
        this.router.navigate(['/logout']);
      });
    }
  }

  clickUser() {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['/profile']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
