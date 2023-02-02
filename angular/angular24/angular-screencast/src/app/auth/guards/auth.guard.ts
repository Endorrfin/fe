import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {PATHS} from '../../paths.constants';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const logged = this.authService.isLoggedIn();
    if (!logged) {
      this.router.navigateByUrl(`/${PATHS.login}`);
    }

    return logged;
  }
}
