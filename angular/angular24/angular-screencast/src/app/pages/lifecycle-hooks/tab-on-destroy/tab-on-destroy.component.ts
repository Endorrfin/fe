import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../../@shared/shared.module';

@Component({
  selector: 'app-tab-on-destroy',
  templateUrl: './tab-on-destroy.component.html',
  styleUrls: ['./tab-on-destroy.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class TabOnDestroyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
