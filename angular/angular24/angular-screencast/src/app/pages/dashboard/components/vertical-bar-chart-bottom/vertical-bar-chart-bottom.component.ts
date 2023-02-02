import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {Color, NgxChartsModule, ScaleType} from '@swimlane/ngx-charts';

import { verticalBarChartBottomData } from '../../mock/charts-data';
import {SharedModule} from '../../../../@shared/shared.module';

@Component({
  selector: 'app-vertical-bar-chart-bottom',
  templateUrl: './vertical-bar-chart-bottom.component.html',
  styleUrls: ['./vertical-bar-chart-bottom.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule, NgxChartsModule],
})
export class VerticalBarChartBottomComponent implements OnInit {
  verticalBarChartBottomData: [] = [];

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
    Object.assign(this, { verticalBarChartBottomData });
  }

  ngOnInit(): void {}

  yAxisTickFormatting(value: number) {
    return value.toLocaleString() + '%';
  }
}
