import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../../@shared/shared.module';

@Component({
  selector: 'app-tab-after-content-checked',
  templateUrl: './tab-after-content-checked.component.html',
  styleUrls: ['./tab-after-content-checked.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class TabAfterContentCheckedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
