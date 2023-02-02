import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../../@shared/shared.module';

import { verticalBarChartTopData } from '../../mock/charts-data';
import {Color, NgxChartsModule, ScaleType} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-vertical-bar-chart-top',
  templateUrl: './vertical-bar-chart-top.component.html',
  styleUrls: ['./vertical-bar-chart-top.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule, NgxChartsModule],
})
export class VerticalBarChartTopComponent implements OnInit {
  verticalBarChartTopData: [] = [];
  view: [number, number] = [300, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  yScaleMax = 100;
  showGridLines = true;
  roundEdges = false;
  barPadding = 30;
  yAxisTicks: any[] = [25, 50, 75, 100];

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#3089f0'],
  };

  constructor() {
    Object.assign(this, { verticalBarChartTopData });
  }

  ngOnInit(): void {}

  yAxisTickFormatting(value: number) {
    return value.toLocaleString() + '%';
  }
}
