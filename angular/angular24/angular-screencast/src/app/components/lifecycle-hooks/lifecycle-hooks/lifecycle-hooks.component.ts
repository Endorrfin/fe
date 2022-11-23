import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit {
  title: string = 'title-life-cycle-hooks';
  show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  array = [1, 2, 3, 4, 5, 6, 7];

  modifyArray() {
    // OPTION MUTABLE APPROACH I
    this.array.push(8);

    // OPTION IMMUTABLE APPROACH II
    // this.array = [...this.array, 8];
  }

}
