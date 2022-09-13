import {Component, OnInit} from '@angular/core';
import {Animal} from "../../classes/animal";

@Component({
    selector: 'app-dog',
    templateUrl: './dog.component.html',
    styleUrls: ['./dog.component.scss'],
    providers: [{provide: Animal, useExisting: DogComponent}]
})
export class DogComponent implements OnInit {

    phrase = ''

    constructor() {
    }

    ngOnInit(): void {
    }

    say() {
        this.phrase = 'woof';
    }

}
