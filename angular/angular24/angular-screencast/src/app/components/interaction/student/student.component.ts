import {Component, Input, OnInit} from '@angular/core';
import {IStudent, IStudentData} from "../../../shared/interfaces/interaction";

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

    @Input() student: IStudent;
    @Input() studentData: IStudentData;

    constructor() {
    }

    ngOnInit(): void {
    }

}
