import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SecondDialogComponent} from "../second-dialog/second-dialog.component";

export interface DialogData {
  animals: {};
  likes: {};
}

@Component({
  selector: 'app-first-dialog',
  templateUrl: './first-dialog.component.html',
  styleUrls: ['./first-dialog.component.scss']
})
export class FirstDialogComponent implements OnInit {

  // animal: any;
  // like: any;
  // dialogRef: MatDialogRef<SecondDialogComponent>;

  constructor(
      public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(SecondDialogComponent, {
      hasBackdrop: true,
      data: {
        animals: ['Panda', 'Unicorn', 'Lion'],
        likes: ['Yes', 'No']
      },
      panelClass: 'custom-dialog-container'
    });
  }

}
