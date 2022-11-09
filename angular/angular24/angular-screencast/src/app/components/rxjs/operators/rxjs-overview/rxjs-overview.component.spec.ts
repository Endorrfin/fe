import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOverviewComponent } from './rxjs-overview.component';

describe('RxjsOverviewComponent', () => {
  let component: RxjsOverviewComponent;
  let fixture: ComponentFixture<RxjsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
