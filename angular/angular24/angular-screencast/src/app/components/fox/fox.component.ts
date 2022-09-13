import {Component, OnInit} from '@angular/core';
import {Animal} from "../../classes/animal";

@Component({
    selector: 'app-fox',
    templateUrl: './fox.component.html',
    styleUrls: ['./fox.component.scss'],
    providers: [{provide: Animal, useExisting: FoxComponent}]
})
export class FoxComponent implements OnInit {

    phrase = '';

    constructor() {
    }

    ngOnInit(): void {
    }

    say() {
        this.phrase = 'wow';
    }

}
