import {Component, Injector, OnInit} from '@angular/core';
import {createCustomElement} from "@angular/elements";
import {HelloComponent} from "./hello/hello.component";

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {

  constructor(injector: Injector) {
    const helloElement = createCustomElement(HelloComponent, { injector });
    customElements.define('app-hello', helloElement);
  }

  ngOnInit(): void {
  }

}
