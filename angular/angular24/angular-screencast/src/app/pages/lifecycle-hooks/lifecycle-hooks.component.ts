import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../@shared/shared.module';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss'],
  standalone: true,
  imports: [SharedModule, RouterModule],
})
export class LifecycleHooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
