import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SharedModule} from '../../@shared/shared.module';
import {RouterModule} from '@angular/router';
import {LeftSidebarComponent} from '../left-sidebar/left-sidebar.component';

@Component({
  selector: 'app-dashboard-wrapper',
  template: `
    <div class="flex">
      <app-left-sidebar></app-left-sidebar>

      <div class="flex-auto h-screen top-0 overflow-y-auto w-auto">
        <main class="py-3 mx-5">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SharedModule, RouterModule, LeftSidebarComponent],
})
export class DashboardWrapperComponent {}
