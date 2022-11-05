import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // INPUT PARAMETERS [... some parameters]
  @Input() title?: string;
  @Input() head: string = 'head';
  @Input() counter = 0;

  // OUTPUT PARAMETERS (... some parameters)
  @Output() sayHi = new EventEmitter<string>();

  // Must contain suffix change
  @Output() counterChange = new EventEmitter<number>();

  constructor() {
    console.log('CONSTRUCTOR (Class life cycle)', this.title);
  }

  ngOnInit(): void {
    console.log('ngOnInit (Component life cycle)', this.title);
  }

  onSayHi() {
    // TODO emit event
    this.sayHi.emit(this.title + ' Hello');
  }

}
