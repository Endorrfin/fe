import { Component, OnInit } from '@angular/core';
import {LoaderService} from '../../../@core/services/loader.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading$: Observable<boolean> = of(false);

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loading$ = this.loaderService.status;

  }

}
