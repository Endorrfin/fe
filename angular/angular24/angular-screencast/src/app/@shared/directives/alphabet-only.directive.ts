import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[haloAlphabetOnly]',
})
export class AlphabetOnlyDirective {
  @HostListener('keydown', ['$event']) public onKeydown(event: KeyboardEvent) {
    if ((+event.key >= 15 && +event.key <= 64) || +event.key >= 123 || (+event.key >= 96 && +event.key <= 105)) {
      event.preventDefault();
    }
  }
}
