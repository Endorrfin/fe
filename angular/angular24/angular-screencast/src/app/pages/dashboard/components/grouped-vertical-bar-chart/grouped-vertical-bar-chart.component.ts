import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../../../@shared/shared.module';
import {Color, NgxChartsModule, ScaleType} from '@swimlane/ngx-charts';

import { groupedVerticalBarChartData } from '../../mock/charts-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grouped-vertical-bar-chart',
  templateUrl: './grouped-vertical-bar-chart.component.html',
  styleUrls: ['./grouped-vertical-bar-chart.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule, NgxChartsModule],
})
export class GroupedVerticalBarChartComponent implements OnInit {
  groupedVerticalBarChartData: [] = [];

  view: [number, number] = [300, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  roundDomains = false;
  xAxisTicks: any[] = ['Dec 8', 'Jan 4', 'Feb 1', 'Feb 22'];
  yAxisTicks: any[] = [3, 6, 9, 12];
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#3089f0', '#FFB300'],
  };

  constructor() {
    Object.assign(this, { groupedVerticalBarChartData });
  }

  ngOnInit(): void {}
}
