import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildUnitComponent } from './child-unit.component';

describe('ChildUnitComponent', () => {
  let component: ChildUnitComponent;
  let fixture: ComponentFixture<ChildUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
