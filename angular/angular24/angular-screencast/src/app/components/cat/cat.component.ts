import {Component, OnInit} from '@angular/core';
import {Animal} from "../../classes/animal";

@Component({
    selector: 'app-cat',
    templateUrl: './cat.component.html',
    styleUrls: ['./cat.component.scss'],
    providers: [{provide: Animal, useExisting: CatComponent}]
})
export class CatComponent implements OnInit {

    phrase = ''

    constructor() {
    }

    ngOnInit(): void {
    }

    say() {
        this.phrase = 'meow';
    }

}
