import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../../@shared/shared.module';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './tab-template-driven-forms.component.html',
  styleUrls: ['./tab-template-driven-forms.component.scss'],
  standalone: true,
  imports: [SharedModule, RouterModule],
})
export class TabTemplateDrivenFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
