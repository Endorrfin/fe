import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: 'app-greetings',
    templateUrl: 'greetings.component.html'
})

export class Greetings implements OnInit {

    @Input() name!: string;

    ngOnInit() {
        console.log(this.name);
    }
}
