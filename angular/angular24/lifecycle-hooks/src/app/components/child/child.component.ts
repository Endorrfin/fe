import {
  Component,
  Input,
  DoCheck,
  OnChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild, ContentChild, ElementRef
} from '@angular/core'
import { GrandChildComponent } from './grand-child/grand-child.component'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  @Input() value = 'Initial value'

  @ViewChild('foo') content: ElementRef

  @ViewChild(GrandChildComponent) grandChild: GrandChildComponent

  // @ContentChild('foo') content: ElementRef

  constructor() {
    console.log('CHILD Constructor', this.value, this.grandChild)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHILD ngOnChanges', this.value, changes, this.grandChild)
  }

  ngOnInit(): void {
    console.log('CHILD ngOnInit', this.value, this.grandChild)
  }

  ngDoCheck(): void {
    console.log('CHILD ngDoCheck', this.value, this.grandChild)
  }

  ngAfterContentInit(): void {
    console.log('CHILD ngAfterContentInit', this.value, this.grandChild)
  }

  ngAfterContentChecked(): void {
    console.log('CHILD ngAfterContentChecked', this.value, this.grandChild)
  }

  ngAfterViewInit(): void {
    console.log('CHILD ngAfterViewInit', this.value, this.grandChild, this.grandChild.value)
  }

  ngAfterViewChecked(): void {
    console.log('CHILD ngAfterViewChecked', this.value, this.grandChild)
  }

  ngOnDestroy() {
    console.log('CHILD ngOnDestroy', this.value, this.grandChild)
  }

}
