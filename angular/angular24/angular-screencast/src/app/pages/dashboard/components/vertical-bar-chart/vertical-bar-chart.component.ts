import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../../../@shared/shared.module';
import {Color, NgxChartsModule, ScaleType} from '@swimlane/ngx-charts';

import { verticalBarChartData } from '../../mock/charts-data';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule, NgxChartsModule],
})
export class VerticalBarChartComponent implements OnInit {
  verticalBarChartData: [] = [];

  view: [number, number] = [500, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  yScaleMax = 400;
  yScaleMin = 0;
  showGridLines = true;
  roundEdges = false;

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#3089f0'],
  };
  xAxisTicks: any[] = ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM', '12AM'];

  constructor() {
    Object.assign(this, { verticalBarChartData });
  }

  ngOnInit(): void {}

  yAxisTickFormatting(value: number) {
    return value.toLocaleString() + 'k';
  }
}
