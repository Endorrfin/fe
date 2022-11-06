import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges, Input, } from '@angular/core';

@Component({
  selector: 'app-parent-hook',
  templateUrl: './parent-hook.component.html',
  styleUrls: ['./parent-hook.component.scss']
})
export class ParentHookComponent implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  @Input() titleParentHook: string = 'before init parent';

  constructor() {
    console.log(' === PARENT === Constructor', this.titleParentHook);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('PARENT ------> ngOnChange <------', changes, this.titleParentHook);
  }

  ngOnInit(): void {
    console.log('=== PARENT === ngOnInit', this.titleParentHook);
  }

  ngDoCheck(): void {
    console.log('=== PARENT === ngDoCheck', this.titleParentHook);
  }

  ngAfterContentInit(): void {
    console.log('=== PARENT === ngAfterContentInit', this.titleParentHook);
  }

  ngAfterContentChecked(): void {
    console.log('=== PARENT === ngAfterContentChecked', this.titleParentHook);
  }

  ngAfterViewInit(): void {
    console.log('=== PARENT === ngAfterViewInit', this.titleParentHook);
  }

  ngAfterViewChecked(): void {
    console.log('=== PARENT === ngAfterViewChecked', this.titleParentHook);
  }

  ngOnDestroy(): void {
    console.log('=== PARENT === ngOnDestroy', this.titleParentHook);
  }

}
