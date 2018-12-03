import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private user: UserService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.user.isLoggedIn()) {
      return true;
    } else {
      this.user.redirected = true;
      this.user.redirectURL = state.url;
      this.router.navigate(['/login']);
      return false;
    }
  }
}
