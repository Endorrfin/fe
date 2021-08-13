import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core'

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss']
})
export class GrandChildComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  @Input() value = 'Grand Child Value'

  constructor() {
    console.log('GRANDCHILD Constructor', this.value)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('GRANDCHILD ngOnChanges', this.value, changes)
  }

  ngOnInit(): void {
    console.log('GRANDCHILD ngOnInit', this.value)
  }

  ngDoCheck(): void {
    console.log('GRANDCHILD ngDoCheck', this.value)
  }

  ngAfterContentInit(): void {
    console.log('GRANDCHILD ngAfterContentInit', this.value)
  }

  ngAfterContentChecked(): void {
    console.log('GRANDCHILD ngAfterContentChecked', this.value)
  }

  ngAfterViewInit(): void {
    console.log('GRANDCHILD ngAfterViewInit', this.value)
  }

  ngAfterViewChecked(): void {
    console.log('GRANDCHILD ngAfterViewChecked', this.value)
  }

  ngOnDestroy() {
    console.log('GRANDCHILD ngOnDestroy', this.value)
  }

}
