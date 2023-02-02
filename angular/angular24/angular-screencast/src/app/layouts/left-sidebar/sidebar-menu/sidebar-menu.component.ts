import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../../@shared/shared.module';
import {RouterModule} from '@angular/router';
import {MatMenuTrigger} from '@angular/material/menu';

const TIMEOUT = 100;

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  standalone: true,
  imports: [SharedModule, RouterModule],
})
export class SidebarMenuComponent implements OnInit {
  public enteredIcon = false;
  public isMatMenuOpen = false;

  public menuenter() {
    this.isMatMenuOpen = true;
  }

  public menuLeave(trigger: MatMenuTrigger) {
    setTimeout(() => {
      this.isMatMenuOpen = false;
      if (!this.enteredIcon) {
        trigger.closeMenu();
      }
    }, TIMEOUT);
  }

  public iconEnter(trigger: MatMenuTrigger) {
    setTimeout(() => {
      this.enteredIcon = true;
      if (!this.isMatMenuOpen) {
        trigger.openMenu();
      }
    });
  }

  public iconLeave(trigger: MatMenuTrigger) {
    setTimeout(() => {
      if (this.enteredIcon && !this.isMatMenuOpen) {
        trigger.closeMenu();
      }
      if (!this.isMatMenuOpen) {
        trigger.closeMenu();
      } else {
        this.enteredIcon = false;
      }
    }, TIMEOUT);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
