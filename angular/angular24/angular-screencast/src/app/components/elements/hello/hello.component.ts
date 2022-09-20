import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
    selector: 'app-hello',
    templateUrl: 'hello.component.html',
    styleUrls: ['hello.component.scss']
})

export class HelloComponent implements OnInit {

    @Input() name!: string;
    @Output() clicked = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }
}
