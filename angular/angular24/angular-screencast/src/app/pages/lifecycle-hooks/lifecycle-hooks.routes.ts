import {Routes} from '@angular/router';
import {PATHS} from '../../paths.constants';
import {LifecycleHooksComponent} from './lifecycle-hooks.component';
import {TabOnChangesComponent} from './tab-on-changes/tab-on-changes.component';
import {TabOnInitComponent} from './tab-on-init/tab-on-init.component';
import {TabOnDocheckComponent} from './tab-on-docheck/tab-on-docheck.component';
import {TabAfterContentInitComponent} from './tab-after-content-init/tab-after-content-init.component';
import {TabAfterContentCheckedComponent} from './tab-after-content-checked/tab-after-content-checked.component';
import {TabAfterViewInitComponent} from './tab-after-view-init/tab-after-view-init.component';
import {TabAfterViewCheckedComponent} from './tab-after-view-checked/tab-after-view-checked.component';
import {TabOnDestroyComponent} from './tab-on-destroy/tab-on-destroy.component';


export const LifecycleHooksRoutes: Routes = [
  { path: '', redirectTo: PATHS.onchanges, pathMatch: 'full' },
  {
    path: '',
    component: LifecycleHooksComponent,
    children: [
      {
        path: PATHS.onchanges,
        component: TabOnChangesComponent,
      },
      {
        path: PATHS.oninit,
        component: TabOnInitComponent,
      },
      {
        path: PATHS.docheck,
        component: TabOnDocheckComponent,
      },
      {
        path: PATHS.aftercontentinit,
        component: TabAfterContentInitComponent,
      },
      {
        path: PATHS.aftercontentchecked,
        component: TabAfterContentCheckedComponent,
      },
      {
        path: PATHS.afterviewinit,
        component: TabAfterViewInitComponent,
      },
      {
        path: PATHS.afterviewchecked,
        component: TabAfterViewCheckedComponent,
      },
      {
        path: PATHS.onoestroy,
        component: TabOnDestroyComponent,
      }
    ]
  }
]
