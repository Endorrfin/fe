import {Injectable} from '@angular/core';
import {IStudentData} from "../shared/interfaces/interaction";
import {BehaviorSubject, Observable, take} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    constructor() {
    }

    studentsData: BehaviorSubject<IStudentData[]> = new BehaviorSubject<IStudentData[]>([
        {id: 1, name: 'Adam', surname: 'Smith', age: 17},
        {id: 2, name: 'Brendon', surname: 'Beningston', age: 34},
        {id: 3, name: 'Clive', surname: 'Cronstain', age: 56},
        {id: 4, name: 'Derek', surname: 'Dortmund', age: 38},
        {id: 5, name: 'Emanuel', surname: 'Everton', age: 9},
    ]);

    studentsData$: Observable<IStudentData[]> = this.studentsData.asObservable()


    addStudentData(name: string, surname: string, age: number) {
        this.studentsData$.pipe(
            take(1)).subscribe((val) => {
            let studentDataLength = 0;
            this.studentsData$.subscribe((studentsData) => {
                studentDataLength = studentsData.length;
            });

            const newStudentData = {
                id: studentDataLength + 1,
                name: name,
                surname: surname,
                age: age,
            };

            const newStudentDataArray = [...val, newStudentData];
            this.studentsData.next(newStudentDataArray);
        });
    }

}
