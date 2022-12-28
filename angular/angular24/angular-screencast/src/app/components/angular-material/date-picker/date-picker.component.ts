import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  form: FormGroup;
  comparisonStart = new Date('2021-12');
  comparisonEnd = new Date('2022-02');

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      daterange: new FormGroup({
        start: new FormControl(),
        end: new FormControl(),
      }),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  unavailableDays(calendarDate: Date): boolean {
    return calendarDate > new Date();
  }

}
