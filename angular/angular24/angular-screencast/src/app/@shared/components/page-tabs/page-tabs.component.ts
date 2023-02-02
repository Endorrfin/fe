import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-tabs',
  templateUrl: './page-tabs.component.html',
  styleUrls: ['./page-tabs.component.scss']
})
export class PageTabsComponent implements OnInit {
  public navigationConfig = this.route.routeConfig;
  public data$ = this.route.data;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
