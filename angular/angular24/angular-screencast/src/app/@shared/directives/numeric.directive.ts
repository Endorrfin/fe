import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[haloNumeric]',
})
export class NumberDirective {
  constructor(private _el: ElementRef) {}

  @HostListener('input', ['$event']) public onInputChange(event: any) {
    const initialValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initialValue.replace(/[^0-9]*/g, '');
    if (initialValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
