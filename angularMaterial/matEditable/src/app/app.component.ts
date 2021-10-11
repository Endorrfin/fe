import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'matEditable';

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any[];
  tableForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder)
  {
    this.dataSource = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
  }

  ngOnInit(){
    this.tableForm= this.formBuilder.group({
      users: this.formBuilder.array([])
    })
    this.setUsersForm();
    this.tableForm.get('users').valueChanges.subscribe(users => {console.log('users', users)});
  }
  private setUsersForm(){
    const userCtrl = this.tableForm.get('users') as FormArray;
    this.dataSource.forEach((user: any)=>{
      userCtrl.push(this.setUsersFormArray(user))
    })
  };
  private setUsersFormArray(user: any){


    return this.formBuilder.group({
      position:[user.position],
      name:[user.name],
      weight:[user.weight],
      symbol:[user.symbol]
    });
  }
}
