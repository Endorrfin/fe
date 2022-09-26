import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../first-dialog/first-dialog.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-second-dialog',
  templateUrl: './second-dialog.component.html',
  styleUrls: ['./second-dialog.component.scss']
})
export class SecondDialogComponent implements OnInit {

  constructor(
      public dialogRef: MatDialogRef<SecondDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public dialogData: DialogData
  ) { }

  likesFormControl: FormControl = new FormControl();
  allAnimals: any = this.dialogData.animals;
  allLikes: any = this.dialogData.likes;
  selected: String = "Panda";
  likeSelected: String = 'Yes';
  inputVal: String = "Yes";
  // consolidated: [];
  animal: any;
  like: any;
  saved: boolean = false;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dialogRef.beforeClosed().subscribe((result: { animal: any; like: any; }) => {
      this.animal = result.animal;
      this.like = result.like;
    });
  }

  save() {
    this.saved = true;
  }
  reset() {
    this.saved = false;
    // this.inputVal="yes";
    this.likeSelected = "Yes";
  }

  closeDialog() {
    // this.consolidated = this.allAnimals.slice(0, this.allAnimals.length);
    // this.consolidated = this.allLikes.slice(0, this.allLikes.length);
    this.dialogRef.close();
  }

}
