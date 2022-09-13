import {
  Component,
  ContentChildren,
  ContentChild,
  OnInit,
  ElementRef,
  QueryList
} from '@angular/core';
import {Animal} from "../../classes/animal";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent {

  // @ContentChildren('h') animals!: QueryList<ElementRef>
  @ContentChildren(Animal) animals!: QueryList<Animal>


  say(): void {
    // this.animals.forEach(animal => console.log(animal));
    this.animals.forEach(animal => animal.say());
  }

}
