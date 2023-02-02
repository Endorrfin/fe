import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOnChangesComponent } from './tab-on-changes.component';

describe('TabOnChangesComponent', () => {
  let component: TabOnChangesComponent;
  let fixture: ComponentFixture<TabOnChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabOnChangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabOnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
