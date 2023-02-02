import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../../@shared/shared.module';

@Component({
  selector: 'app-tab-on-init',
  templateUrl: './tab-on-init.component.html',
  styleUrls: ['./tab-on-init.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class TabOnInitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
