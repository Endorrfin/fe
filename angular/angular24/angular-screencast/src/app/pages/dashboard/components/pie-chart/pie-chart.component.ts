import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Color, NgxChartsModule, ScaleType} from '@swimlane/ngx-charts';
import {SharedModule} from '../../../../@shared/shared.module';

import { pieChartData } from '../../mock/charts-data';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule, NgxChartsModule],
})
export class PieChartComponent implements OnInit {
  pieChartData: [] = [];
  view: [number, number] = [300, 300];
  totalChartCount = 0;

  // options
  gradient = true;
  isDoughnut = true;
  arcWidth = 0.1;

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#23cf87', '#FFB200', '#d7d9d9'],
  };

  constructor() {
    Object.assign(this, { pieChartData });
  }

  ngOnInit(): void {
    this.onCountTotalChartCount();
  }

  onCountTotalChartCount(): number {
    return (this.totalChartCount = pieChartData.reduce((a, b) => a + b.value, 0));
  }
}
