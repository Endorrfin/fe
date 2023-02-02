import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {SharedModule} from '../../../@shared/shared.module';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Subject} from 'rxjs';
import { map } from 'rxjs/operators';
import {IFacility, IFamous} from '../interfaces';

@Component({
  selector: 'app-select-group',
  templateUrl: './select-group.component.html',
  styleUrls: ['./select-group.component.scss'],
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectGroupComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public city!: IFacility;
  @Input() public selectAllToggle!: boolean;
  @Output() public selected: EventEmitter<{ id: number; selected: number[] }> = new EventEmitter<{
    id: number;
    selected: number[];
  }>();

  public selectAllState = false;
  public form: FormGroup = new FormGroup({
    famous: new FormArray([]),
  });

  private unsubscriber: Subject<void> = new Subject();

  public get famousControls(): FormArray {
    return this.form.get('famous') as FormArray;
  }

  public get list() {
    return this.city.famous.map((famous: IFamous) => famous.name);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const selectAllToggle = changes['selectAllToggle'];

    if (selectAllToggle && !selectAllToggle.firstChange) {
      this.selectAllState = !selectAllToggle.currentValue;
      this.onToggleSelectAll(false);
    }
  }

  public ngOnInit(): void {
    this.onInitForm();
    this.onChangeForm();
  }

  public onInitForm(): void {
    this.city.famous.forEach(() => this.famousControls.push(new FormControl(false)));
  }

  public onChangeForm(): void {
    this.famousControls.valueChanges
      .pipe(
        map((res) => res.map((checked: boolean, i: number) => (checked ? this.city.famous[i].value : checked))),
        map((res) => res.filter(Boolean))
      )
      .subscribe((res) => this.selected.emit({ id: this.city.id, selected: res }));
  }

  public onToggleSelectAll(emitEvent = true): void {
    this.selectAllState = !this.selectAllState;

    const state = this.list.map(() => this.selectAllState);
    this.famousControls.patchValue(state, { emitEvent });
  }

  public ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
