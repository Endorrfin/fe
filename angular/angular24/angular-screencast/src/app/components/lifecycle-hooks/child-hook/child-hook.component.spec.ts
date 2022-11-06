import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildHookComponent } from './child-hook.component';

describe('ChildHookComponent', () => {
  let component: ChildHookComponent;
  let fixture: ComponentFixture<ChildHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildHookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
