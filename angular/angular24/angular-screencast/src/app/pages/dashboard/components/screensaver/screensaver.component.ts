import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../../../@shared/shared.module';

import { screensaverData } from '../../mock/charts-data';
@Component({
  selector: 'app-screensaver',
  templateUrl: './screensaver.component.html',
  styleUrls: ['./screensaver.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule],
})
export class ScreensaverComponent implements OnInit {
  screensaverData: [] = [];
  imagePath = '';

  constructor() {
    Object.assign(this, { screensaverData });
  }

  ngOnInit(): void {
    this.imagePath = screensaverData[0].imagePath;
  }
}
