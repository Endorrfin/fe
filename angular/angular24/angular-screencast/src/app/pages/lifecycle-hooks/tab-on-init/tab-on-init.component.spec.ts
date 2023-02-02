import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOnInitComponent } from './tab-on-init.component';

describe('TabOnInitComponent', () => {
  let component: TabOnInitComponent;
  let fixture: ComponentFixture<TabOnInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabOnInitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabOnInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
