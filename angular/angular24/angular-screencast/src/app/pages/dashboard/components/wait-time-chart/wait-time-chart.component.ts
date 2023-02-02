import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../../@shared/shared.module';

import { waitTimeChartData } from '../../mock/charts-data';


@Component({
  selector: 'app-wait-time-chart',
  templateUrl: './wait-time-chart.component.html',
  styleUrls: ['./wait-time-chart.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule],
})
export class WaitTimeChartComponent implements OnInit {
  waitTimeChartData: [] = [];
  selectedElement: {
    iconPath: string;
    waitTime: string;
  } = {
    iconPath: '',
    waitTime: '',
  };

  constructor() {
    Object.assign(this, { waitTimeChartData });
  }

  ngOnInit(): void {
    this.selectedElement = waitTimeChartData[0];
  }

  onSelectElement(element: any) {
    this.selectedElement = element;
  }
}
