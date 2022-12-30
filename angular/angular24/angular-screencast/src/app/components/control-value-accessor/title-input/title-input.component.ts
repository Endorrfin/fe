import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NgControl} from '@angular/forms';

@Component({
  selector: 'app-title-input',
  templateUrl: './title-input.component.html',
  styleUrls: ['./title-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleInputComponent implements OnInit {
  public get value(): string {
    return this.ngControl.value;
  }

  constructor(
    private readonly ngControl: NgControl
  ) {}

  ngOnInit(): void {
  }

}
