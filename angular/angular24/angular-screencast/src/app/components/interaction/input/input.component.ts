import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IStudentData} from "../../../shared/interfaces/interaction";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
    @Output() outEnterName = new EventEmitter<string>();
    @Output() outEnterStudentData = new EventEmitter<IStudentData>();

    constructor() {
    }

    ngOnInit(): void {
    }

    enterName(nameInput: HTMLInputElement) {
        // console.log('nameInput.value', nameInput.value);
        this.outEnterName.emit(nameInput.value);
        nameInput.value = '';
    }


    // enterStudentData(studentData: IStudentData ) {
    //     // console.log('nameInput.value', nameInput.value);
    //     this.outEnterStudentData.emit(studentData.value);
    //     studentData.name = '';
    //     studentData.surname = '';
    //     studentData.age = Number('');
    // }

}
