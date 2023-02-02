import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOnDocheckComponent } from './tab-on-docheck.component';

describe('TabOnDocheckComponent', () => {
  let component: TabOnDocheckComponent;
  let fixture: ComponentFixture<TabOnDocheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabOnDocheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabOnDocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
