import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: 'app-parent-greetings',
    templateUrl: 'parent-greetings.component.html'
})

export class ParentGreetings {
    stranger = 'Somename '

    constructor() {
        setInterval((_: number) => {
            this.stranger = 'Some number is: ' + Math.round(Math.random() * 1000).toFixed(0);
        }, 1000);
    }
}
