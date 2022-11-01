import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MyDialogComponent} from "../dialog/my-dialog/my-dialog.component";

@Component({
  selector: 'app-parent-dialog',
  templateUrl: './parent-dialog.component.html',
  styleUrls: ['./parent-dialog.component.scss']
})
export class ParentDialogComponent implements OnInit {

  // Dialog using Template, Pass and Get Data
  title = 'angular-material-dialog-app';

  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

  dialogTemplateData = ['Item One', 'Item Second', 'Item There', 'Item four', 'Item five']
  dialogComponentData = [
    'Product One',
    'Product Second',
    'Product There',
    'Product four',
    'Product five',
    'Product six',
    'Product seven',
    'Product eight',
    'Product nine',
    'Product ten'
  ];

  constructor(
      public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openTempDialog() {
    const myTempDialog = this.dialog.open(this.dialogRef, { data: this.dialogTemplateData });
    myTempDialog.afterClosed().subscribe((res) => {

      // Data back from dialog
      console.log({ res });
    });
  }


  // Dialog using Component
  openCompDialog() {
    const myCompDialog = this.dialog.open(MyDialogComponent, {
      data: this.dialogComponentData,
      panelClass: 'fullscreen-dialog',
      height: '100vh',
      width: '100%'
    });

    myCompDialog.afterOpened().subscribe((res) => {
      // Trigger After Dialog Opened
      console.log('After Opened', { res });
    });
    myCompDialog.beforeClosed().subscribe((res) => {
      // Trigger Before Dialog Closed
      console.log('Before Closed', { res });
    });
    myCompDialog.afterClosed().subscribe((res) => {
      // Trigger After Dialog Closed
      console.log('After Closed', { res });
    });
  }



  openConfirmDialog() {
    const myCompDialog = this.dialog.open(MyDialogComponent,
        {
          data: 'Your files will be deleted!'
        }
    );
    myCompDialog.afterClosed().subscribe((res) => {
      // Trigger After Dialog Closed

      switch (res.event) {
        case "yes-option":
          console.log('Yes Clicked');
          break;
        case "no-option":
          console.log('No Clicked');
          break;
        case "maybe-option":
          console.log('May Be Clicked');
          break;

        default:
          break;
      }
    });
  }


}
