import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  @Input() pages: any[] = [];
  // xss = '<img src="" onerror="alert(123)" />';
  xss = `<IMG SRC="javascript:alert('XSS');">`;

  constructor() { }

  ngOnInit(): void {
  }

}
