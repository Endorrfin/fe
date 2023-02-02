import {Routes} from '@angular/router';
import {PATHS} from '../../paths.constants';
import {DashboardComponent} from './dashboard.component';

// export the routes and make it all stand alone
export const DashboardRoutes: Routes = [
  { path: '', redirectTo: PATHS.dashboard, pathMatch: 'full' },
  {
    path: PATHS.dashboard,
    component: DashboardComponent,
  },
];
