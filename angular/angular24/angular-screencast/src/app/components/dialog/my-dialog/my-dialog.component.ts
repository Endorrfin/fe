import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {

  fromPage!: string;
  fromDialog!: string;

  constructor(
      public dialogRef: MatDialogRef<MyDialogComponent>,
      @Optional() @Inject(MAT_DIALOG_DATA) public mydata: any
  ) { }

  ngOnInit(): void {
    this.fromPage = this.mydata;
    this.fromDialog = "I am from dialog land...";
  }

  closeDialog() {
    this.dialogRef.close({
      event: 'close',
      data: this.fromDialog
    });
  }


  yesDialog() {
    this.dialogRef.close({ event: 'yes-option', data: this.fromDialog });
  }
  noDialog() {
    this.dialogRef.close({ event: 'no-option', data: this.fromDialog });
  }
  maybeDialog() {
    this.dialogRef.close({ event: 'maybe-option', data: this.fromDialog });
  }

}
