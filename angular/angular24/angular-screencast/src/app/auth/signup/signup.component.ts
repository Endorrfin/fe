import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../@shared/shared.module';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports: [SharedModule, RouterModule],
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
