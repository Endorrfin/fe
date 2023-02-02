import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {LoaderComponent} from './loader/loader.component';
import {PageTabsComponent} from './page-tabs/page-tabs.component';
import {PageTitleComponent} from './page-title/page-title.component';

export const SHARED_COMPONENTS: Type<any>[] = [LoaderComponent, PageTabsComponent, PageTitleComponent];

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS],
})
export class SharedComponentsModule {}
