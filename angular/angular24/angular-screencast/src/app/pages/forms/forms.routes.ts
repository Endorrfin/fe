import {Routes} from '@angular/router';
import {PATHS} from '../../paths.constants';
import {FormsComponent} from './forms.component';
import {DataResolver} from './forms.resolver';
import {TabReactiveFormsComponent} from './tab-reactive-forms/tab-reactive-forms.component';
import {TabTemplateDrivenFormsComponent} from './tab-template-driven-form/tab-template-driven-forms.component';

export const FormsRoutes: Routes = [
  { path: '', redirectTo: PATHS.reactive, pathMatch: 'full' },
  {
    path: '',
    component: FormsComponent,
    // resolve: {
    //   data: DataResolver,
    // },
    children: [
      { path: PATHS.reactive, component: TabReactiveFormsComponent },
      { path: PATHS.template, component: TabTemplateDrivenFormsComponent },
    ],
  },
];
