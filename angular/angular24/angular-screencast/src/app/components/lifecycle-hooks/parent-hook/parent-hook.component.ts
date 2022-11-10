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
  SimpleChanges, Input, ChangeDetectionStrategy, ChangeDetectorRef,
} from '@angular/core';
import {fromEvent, Subject, Subscription, takeUntil} from "rxjs";

@Component({
  selector: 'app-parent-hook',
  templateUrl: './parent-hook.component.html',
  styleUrls: ['./parent-hook.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  // лучше так не делать, это для примера
  // @Input() array = [1];
  // private length = this.array.length;
  private length = 1;

  // Обойтись без ngOnChanges можно используя getter & setter
  // private _array = [1];
  // @Input() set array(val: number[]) {
  //   this._array = val;
  // }

  subscription?: Subscription;
  subscriptions?: Subscription[] = [];
  destroy$ = new Subject();

  constructor(
      private cdr: ChangeDetectorRef,
  ) {
    // console.log(' === PARENT === Constructor', this.titleParentHook);
  }

  // Обойтись без ngOnChanges можно используя getter & setter
  private _array = [1];

  get array(): number[] {
    return this._array;
  }

  @Input() set array(val: number[]) {
    this._array = val;
    console.log('ParentComponent.setArray', this._array);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('PARENT ------> ngOnChange <------', changes, this.titleParentHook);
  }

  ngOnInit(): void {
    // console.log('=== PARENT === ngOnInit', this.titleParentHook);

    // OPTION 1
    // this.subscription = fromEvent(document, 'click').subscribe(console.log);

    // OPTION 2
    // this.subscriptions.push(
    //     fromEvent(document, 'click').subscribe(console.log)
    // );

    // OPTION 3
    // fromEvent(document, 'click').pipe(
    //     takeUntil(this.destroy$)
    // ).subscribe(console.log)

    setTimeout(() => {
      this.titleParentHook = 'f00f000';
      // this.cdr.markForCheck();
    },3000);

  }

  ngDoCheck(): void {
    console.log('=== PARENT === ngDoCheck', this.titleParentHook);

    if (this.length !== this.array.length) {
      console.log('Has changes');
      this.cdr.markForCheck();
      this.length = this.array.length;
    }
  }

  ngAfterContentInit(): void {
    // console.log('=== PARENT === ngAfterContentInit', this.titleParentHook);
  }

  ngAfterContentChecked(): void {
    // console.log('=== PARENT === ngAfterContentChecked', this.titleParentHook);
  }

  ngAfterViewInit(): void {
    // console.log('=== PARENT === ngAfterViewInit', this.titleParentHook);
  }

  ngAfterViewChecked(): void {
    // console.log('=== PARENT === ngAfterViewChecked', this.titleParentHook);
  }

  ngOnDestroy(): void {
    // console.log('=== PARENT === ngOnDestroy', this.titleParentHook);

    // OPTION 1
    // this.subscription?.unsubscribe();

    // OPTION 2.1
    // for (let s of this.subscriptions) {
    //   s.unsubscribe();
    // }

    // OPTION 2.2
    this.subscriptions.forEach(s => s.unsubscribe());

    // OPTION 3
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
