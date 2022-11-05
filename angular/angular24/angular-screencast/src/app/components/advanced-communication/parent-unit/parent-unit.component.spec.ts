import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentUnitComponent } from './parent-unit.component';

describe('ParentUnitComponent', () => {
  let component: ParentUnitComponent;
  let fixture: ComponentFixture<ParentUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
