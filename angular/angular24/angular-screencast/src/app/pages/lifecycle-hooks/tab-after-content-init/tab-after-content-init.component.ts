import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../../@shared/shared.module';

@Component({
  selector: 'app-tab-after-content-init',
  templateUrl: './tab-after-content-init.component.html',
  styleUrls: ['./tab-after-content-init.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class TabAfterContentInitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
