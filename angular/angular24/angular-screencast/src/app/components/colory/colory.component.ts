import {Component, OnInit, ViewChild} from '@angular/core';
import {ColoryDirective} from "../../directives/colory.directive";

@Component({
    selector: 'app-colory',
    templateUrl: './colory.component.html',
    styleUrls: ['./colory.component.scss']
})
export class ColoryComponent implements OnInit {

    @ViewChild(ColoryDirective) appColory!: ColoryDirective;

    constructor() {
    }

    ngOnInit(): void {
    }

    changeColor(color: string) {
        this.appColory.setColor(color);
    }

}
