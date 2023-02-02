import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAfterViewCheckedComponent } from './tab-after-view-checked.component';

describe('TabAfterViewCheckedComponent', () => {
  let component: TabAfterViewCheckedComponent;
  let fixture: ComponentFixture<TabAfterViewCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAfterViewCheckedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAfterViewCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
