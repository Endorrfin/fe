import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-child-unit',
  templateUrl: './child-unit.component.html',
  styleUrls: ['./child-unit.component.scss']
})
export class ChildUnitComponent implements OnInit {

  @Input() templateRefString?: TemplateRef<{$implicit: string}>;
  @Input() templateRefNumber?: TemplateRef<{$implicit: number}>;

  constructor() { }

  ngOnInit(): void {
  }

}
