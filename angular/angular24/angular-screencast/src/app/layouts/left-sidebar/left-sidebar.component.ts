import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../@shared/shared.module';
import {NavigationItem} from './left-sidebar.interface';
import {navigationConfig} from './left-sidebar.config';
import {SidebarMenuComponent} from './sidebar-menu/sidebar-menu.component';
import {SidebarSelectorComponent} from '../select/sidebar-selector.component';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SharedModule, RouterModule, SidebarMenuComponent, SidebarSelectorComponent],
})
export class LeftSidebarComponent implements OnInit {
  public navigation: Array<NavigationItem> = navigationConfig;

  constructor() { }

  ngOnInit(): void {
  }

}
