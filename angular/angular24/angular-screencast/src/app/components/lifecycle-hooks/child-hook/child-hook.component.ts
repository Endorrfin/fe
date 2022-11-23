import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child-hook',
  templateUrl: './child-hook.component.html',
  styleUrls: ['./child-hook.component.scss']
})
export class ChildHookComponent implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  titleChildHookOwn: string = 'title-child-hook-own';
  @Input() titleChildHook: string = 'title-child-hook-Input';

  constructor() {
    console.log('CHILD.Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHILD.ngOnChange', changes);
  }

  ngOnInit(): void {
    console.log('CHILD.ngOnInit');
  }

  ngDoCheck(): void {
    console.log('CHILD.ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('CHILD.ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('CHILD.ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('CHILD.ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('CHILD.ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('CHILD.ngOnDestroy');
  }


  sayHi() {
    console.log('Hi, I am from app-child-hook component!');
  }

}
