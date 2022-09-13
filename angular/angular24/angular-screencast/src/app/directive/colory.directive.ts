import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColory]',
  exportAs: 'colory'
})
export class ColoryDirective {

  @HostBinding('style.color') color = 'green';

  constructor() { }

  public setColor(color: string) {
    this.color = color;
  }

}
