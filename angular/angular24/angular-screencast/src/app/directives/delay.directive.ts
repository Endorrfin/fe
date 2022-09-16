import {Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective implements OnInit {

  @Input() delay!: number;
  @Input() delayHide!: number;

  constructor(
      private view: ViewContainerRef,
      private template: TemplateRef<ElementRef>
  ) {}

  ngOnInit() {
    setTimeout((_: any) => {
      const view = this.view.createEmbeddedView(this.template);
      setTimeout(() => {
        view.destroy();
      }, this.delayHide)
    }, this.delay);
  }

}
