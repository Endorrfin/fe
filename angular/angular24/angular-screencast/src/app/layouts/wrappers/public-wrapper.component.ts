import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SharedModule} from '../../@shared/shared.module';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-public-wrapper',
  template: `
    <div class="flex-auto h-screen top-0 overflow-y-auto w-auto">
      <main class="py-3 mx-5">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SharedModule, RouterModule],
})
export class PublicWrapperComponent {}
