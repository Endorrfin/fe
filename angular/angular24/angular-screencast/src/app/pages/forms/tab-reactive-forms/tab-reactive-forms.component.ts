import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../../@shared/shared.module';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './tab-reactive-forms.component.html',
  styleUrls: ['./tab-reactive-forms.component.scss'],
  standalone: true,
  imports: [SharedModule, RouterModule],
})
export class TabReactiveFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
