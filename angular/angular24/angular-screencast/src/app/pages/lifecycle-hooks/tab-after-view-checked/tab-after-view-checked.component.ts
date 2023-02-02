import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../../@shared/shared.module';

@Component({
  selector: 'app-tab-after-view-checked',
  templateUrl: './tab-after-view-checked.component.html',
  styleUrls: ['./tab-after-view-checked.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class TabAfterViewCheckedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
