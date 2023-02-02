import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicWrapperComponent} from './layouts/wrappers/public-wrapper.component';
import {LoggedGuard} from './auth/guards/logged.guard';
import {AuthGuard} from './auth/guards/auth.guard';
import {DashboardWrapperComponent} from './layouts/wrappers/dashboard-wrapper.component';
import {PATHS} from './paths.constants';
import {NotFoundComponent} from './layouts/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: PublicWrapperComponent,
    canActivate: [LoggedGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.route').then((m) => m.AuthRoutes),
      },
    ],
  },
  {
    path: '',
    component: DashboardWrapperComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.route').then((m) => m.DashboardRoutes),
      },
      {
        path: PATHS.hooks,
        loadChildren: () => import('./pages/lifecycle-hooks/lifecycle-hooks.routes').then((m) => m.LifecycleHooksRoutes),
      },
      {
        path: PATHS.forms,
        loadChildren: () => import('./pages/forms/forms.routes').then((m) => m.FormsRoutes),
      },
    ],
  },
  {
    path: '',
    component: PublicWrapperComponent,
    children: [
      {
        path: PATHS.notfound,
        component: NotFoundComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {}
