import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  expression = false;
  title: string = 'my-project';
  age = 18;

  constructor() { }

  ngOnInit(): void {
  }

  onSayHi(text: string) {
    console.log(text);
  }

}
