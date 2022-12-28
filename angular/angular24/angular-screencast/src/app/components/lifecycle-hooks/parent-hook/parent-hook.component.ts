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
  SimpleChanges,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ContentChild,
  ContentChildren,
  QueryList,
  TemplateRef, ElementRef, ViewChild, ViewChildren,
} from '@angular/core';
import {fromEvent, Subject, Subscription, takeUntil} from "rxjs";
import {ChildHookComponent} from "../child-hook/child-hook.component";

@Component({
  selector: 'app-parent-hook',
  templateUrl: './parent-hook.component.html',
  styleUrls: ['./parent-hook.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentHookComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  public _titleParentHook: string = 'before init parent';

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

  get title() {
    return this._titleParentHook
  }

  @Input() set title(val: string) {
    this._titleParentHook = val;
    // console.log('--#1-- ParentComponent.setTitle', this._titleParentHook);
  }

  // Обойтись без ngOnChanges можно используя getter & setter
  private _array = [1];

  get array(): number[] {
    return this._array;
  }

  @Input() set array(val: number[]) {
    this._array = val;
    // console.log('--#2-- ParentComponent.setArray', this._array);
  }

  // @ContentChild(ChildHookComponent , {static: true})
  // appChildHook!: ChildHookComponent
  //
  // @ContentChildren(ChildHookComponent)
  // childrenContent!: QueryList<ChildHookComponent>

  @ContentChild('ref', {static: true, read: ChildHookComponent})
  appChildHook!: ChildHookComponent;

  @ContentChildren('ref', {read: ChildHookComponent})
  childrenContent!: QueryList<ChildHookComponent>;

  @ContentChildren('foo, bar, baz', {read: TemplateRef})
  templates!: QueryList<TemplateRef<{ $implicit: string }>>


  @ViewChild('jqueryNeverDie', {static: true, read: ElementRef})
  jqueryContainer!: ElementRef<HTMLDivElement>;

  @ViewChild(ChildHookComponent)
  appChildHookViewChild!: ChildHookComponent;

  @ViewChildren(ChildHookComponent)
  appChildrenHookViewChild!: QueryList<ChildHookComponent>


  constructor(
    private cdr: ChangeDetectorRef,
  ) {
    console.log('-0- PARENT -> Constructor', this._titleParentHook, this.appChildHook, this.jqueryContainer);
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('-1- PARENT -> ngOnChange', changes, this._titleParentHook, this.jqueryContainer);
  }

  ngOnInit(): void {
    console.log('-2- PARENT -> ngOnInit', this._titleParentHook, this.appChildHook, this.jqueryContainer);

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
      this._titleParentHook = 'f00f000';
      // this.cdr.markForCheck();
    }, 3000);

  }

  ngDoCheck(): void {
    console.log('-3- PARENT -> ngDoCheck', this._titleParentHook, this.appChildHook, this.jqueryContainer);

    if (this.length !== this.array.length) {
      // console.log('Has changes');
      this.cdr.markForCheck();
      this.length = this.array.length;
    }
  }

  ngAfterContentInit(): void {
    this.appChildHook?.sayHi();
    if (this.appChildHook) {
      this.appChildHook.titleChildHook = 'Bye-bye, my title was changed from parent component!'
    }
    console.log('templates', this.templates);
    console.log('-4- PARENT -> ngAfterContentInit', this._titleParentHook, this.appChildHook, this.childrenContent, this.jqueryContainer);
  }

  ngAfterContentChecked(): void {
    console.log('-5- PARENT -> ngAfterContentChecked', this._titleParentHook, this.appChildHook, this.jqueryContainer);
  }

  ngAfterViewInit(): void {
    // this.appChildHookViewChild.titleChildHookOwn = 'FOO -> ViewChild';
    // Promise.resolve().then(() => this.appChildHookViewChild.titleChildHook = 'title FOO -> no Strategy.OnPush');

    this.appChildHookViewChild.titleChildHook = 'title New -> using Strategy.OnPush';
    this.cdr.detectChanges();
    console.log('-6- PARENT -> ngAfterViewInit', this._titleParentHook, this.appChildHook, this.jqueryContainer);
  }

  ngAfterViewChecked(): void {
    console.log('-7- PARENT -> ngAfterViewChecked', this._titleParentHook, this.appChildHook, this.jqueryContainer);
  }

  ngOnDestroy(): void {
    console.log('-8- PARENT -> ngOnDestroy', this._titleParentHook, this.appChildHook, this.jqueryContainer);

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
