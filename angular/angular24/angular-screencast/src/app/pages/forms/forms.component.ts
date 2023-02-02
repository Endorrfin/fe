import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../@shared/shared.module';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  standalone: true,
  imports: [SharedModule, RouterModule],
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
