import {
  Component,
  ContentChildren,
  ContentChild,
  OnInit,
  ElementRef,
  QueryList
} from '@angular/core';
import {Animal} from "../../animal";
import {CatComponent} from "../cat/cat.component";
import {DogComponent} from "../dog/dog.component";
import {LinkDirective} from "../../directives/link.directive";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  @ContentChildren(Animal) animals!: QueryList<Animal>

  constructor() { }

  ngOnInit(): void {
  }

  say() {
    // this.animals.forEach(animal => console.log(animal));
    this.animals.forEach(animal => animal.say());
  }

}
