import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  isNewItem: boolean = true;

  constructor(
      public dialogRef: MatDialogRef<DialogBoxComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if (this.data) this.isNewItem = false;
  }

  myForm: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? null),
    title: new FormControl(this.data?.title ?? null),
    price: new FormControl(this.data?.price ?? null),
    year: new FormControl(this.data?.year ?? null),
    chip: new FormControl(this.data?.chip ?? null),
    ssd: new FormControl(this.data?.ssd ?? null),
    memory: new FormControl(this.data?.memory ?? null),
    display: new FormControl(this.data?.display ?? null),
  })

  onNoClick(): void {
      this.dialogRef.close(null);
  }

  onSubmit() {
    this.data = {
      id: this.myForm.value.id,
      title: this.myForm.value.title,
      price: this.myForm.value.price,
      year: this.myForm.value.year,
      image: "assets/images/macbook.jpeg",
      configure: {
        chip: this.myForm.value.chip,
        ssd: this.myForm.value.ssd,
        memory: this.myForm.value.memory,
        display: this.myForm.value.display,
      }
    }
    console.log('DIALOG DATA', this.myForm);

    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {
  }

}
