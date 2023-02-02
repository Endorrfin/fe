import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabReactiveFormsComponent } from './tab-reactive-forms.component';

describe('ReactiveFormsComponent', () => {
  let component: TabReactiveFormsComponent;
  let fixture: ComponentFixture<TabReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabReactiveFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
