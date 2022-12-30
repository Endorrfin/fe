import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInputComponent } from './content-input.component';

describe('ContentInputComponent', () => {
  let component: ContentInputComponent;
  let fixture: ComponentFixture<ContentInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
