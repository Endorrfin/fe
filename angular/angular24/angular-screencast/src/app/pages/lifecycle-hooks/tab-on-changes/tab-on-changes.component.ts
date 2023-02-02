import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../../@shared/shared.module';

@Component({
  selector: 'app-tab-on-changes',
  templateUrl: './tab-on-changes.component.html',
  styleUrls: ['./tab-on-changes.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class TabOnChangesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
