import {Routes} from '@angular/router';
import {PATHS} from '../paths.constants';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';

export const AuthRoutes: Routes = [
  { path: '', redirectTo: PATHS.login, pathMatch: 'full' },
  {
    path: PATHS.login,
    component: LoginComponent,
  },
  {
    path: PATHS.signup,
    component: SignupComponent,
  },
];
