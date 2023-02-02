import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../../@shared/shared.module';

@Component({
  selector: 'app-tab-on-docheck',
  templateUrl: './tab-on-docheck.component.html',
  styleUrls: ['./tab-on-docheck.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class TabOnDocheckComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
