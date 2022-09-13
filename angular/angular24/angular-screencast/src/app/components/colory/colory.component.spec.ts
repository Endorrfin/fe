import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoryComponent } from './colory.component';

describe('ColoryComponent', () => {
  let component: ColoryComponent;
  let fixture: ComponentFixture<ColoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
