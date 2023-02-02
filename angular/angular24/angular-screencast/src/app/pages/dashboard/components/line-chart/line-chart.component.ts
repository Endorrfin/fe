import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../../../@shared/shared.module';
import {Color, NgxChartsModule, ScaleType} from '@swimlane/ngx-charts';

import { lineChartData } from '../../mock/charts-data';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule, NgxChartsModule],
})
export class LineChartComponent implements OnInit {
  lineChartData: [] = [];
  view: [number, number] = [500, 270];

  legend = false;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  yScaleMax = 500;
  yScaleMin = 100;
  timeline = true;

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#3089f0', '#C147E9'],
  };

  constructor() {
    Object.assign(this, { lineChartData });
  }

  ngOnInit(): void {}
}
