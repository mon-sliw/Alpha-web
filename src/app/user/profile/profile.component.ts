import {Component, OnInit} from '@angular/core';
import {User} from '../User';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  login: string;
  own: boolean = false;

  user: User /*= {
    id: 1,
    login: "jan_k",
    email: "jan_k@gmail.com",
    password: "passwd",
    firstName: "Jan",
    lastName: "Kowalski",
    city: "Lublin",
    bday: new Date('1995-01-01T12:00:00')
  }*/;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.login = this.route.snapshot.paramMap.get('login');
    if (this.login == null) {
      this.login = this.userService.getLogin();
      this.own = true;
    }
    this.userService.getUser(this.login).subscribe(user => {
      this.user = user;
      this.user.bday = new Date(user.bday);
    });
  }

  delete() {
    if (confirm('Czy na pewno chcesz usunąć konto?')) {
      this.userService.deleteUser(this.login).subscribe(() => {
        this.router.navigate(['/user-deleted']);
      });
    }
  }

}
