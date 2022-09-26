import {Component, OnInit} from '@angular/core';
import {IStudent, IStudentData} from "../../shared/interfaces/interaction";
import {StudentService} from "../../services/student.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-interaction',
    templateUrl: './interaction.component.html',
    styleUrls: ['./interaction.component.scss']
})

export class InteractionComponent implements OnInit {
    studentsData$: Observable<IStudentData[]>;

    constructor(
        private serviceStudent: StudentService
    ) {
        this.studentsData$ = serviceStudent.studentsData;
    }

    ngOnInit(): void {
    }


    students: IStudent[] = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Bill'},
        {id: 3, name: 'Elon'},
        {id: 4, name: 'John'},
        {id: 5, name: 'Rik'},
    ]


    addName(name: string) {
        this.students.push({
            id: this.students.length + 1,
            name: name,
        })
    }

    addStudentsData(name: string, surname: string, age: number) {
        this.serviceStudent.addStudentData(name, surname, age);
        // this.studentsData = this.serviceStudent.getStudentsData();

    }


}
