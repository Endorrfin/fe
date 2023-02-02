import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../@shared/shared.module';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
  imports: [SharedModule, RouterModule],
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
