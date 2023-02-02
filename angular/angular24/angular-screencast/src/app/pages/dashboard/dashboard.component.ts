import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../@shared/shared.module';
import {RouterModule} from '@angular/router';
import {DASH_COMPONENTS} from './components';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'halo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, ...DASH_COMPONENTS],
  providers: [MatDatepickerModule, MatNativeDateModule],
})
export class DashboardComponent implements OnInit {
  dateControl = new FormControl<string>('weekly', Validators.required);

  constructor() {}

  ngOnInit() {}
}
