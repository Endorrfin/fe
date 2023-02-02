import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Color, NgxChartsModule, ScaleType} from '@swimlane/ngx-charts';
import {SharedModule} from '../../../../@shared/shared.module';

import { numberCardChartData } from '../../mock/charts-data';
@Component({
  selector: 'app-number-card-chart',
  templateUrl: './number-card-chart.component.html',
  styleUrls: ['./number-card-chart.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule, NgxChartsModule],
})
export class NumberCardChartComponent implements OnInit {
  numberCardChartData: [] = [];
  view: [number, number] = [750, 130];

  cardColor = '#e3e3e3';
  textColor = '#535252';
  innerPadding = 15;

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#e3e3e3'],
  };

  constructor() {
    Object.assign(this, { numberCardChartData });
  }

  ngOnInit(): void {}
}
