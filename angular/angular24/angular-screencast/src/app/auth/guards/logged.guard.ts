import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {PATHS} from '../../paths.constants';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const isAnonymous = !this.authService.isLoggedIn();
    if (!isAnonymous) {
      this.router.navigateByUrl(`/${PATHS.dashboard}`);
    }
    return isAnonymous;
  }
}
