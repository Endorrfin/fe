import { Component, OnInit } from '@angular/core';
import {Animal} from "../../animal";

@Component({
  selector: 'app-fox',
  templateUrl: './fox.component.html',
  styleUrls: ['./fox.component.css'],
  providers: [{ provide: Animal, useExisting: FoxComponent }]
})
export class FoxComponent implements OnInit {
  phrase = ''

  constructor() { }

  ngOnInit(): void {
  }

  say() {
    this.phrase = 'wow';
  }

}
