import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-control-value-accessor',
  templateUrl: './control-value-accessor.component.html',
  styleUrls: ['./control-value-accessor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlValueAccessorComponent implements OnInit {

  public formGroup = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    content: new FormControl('Your story...')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
