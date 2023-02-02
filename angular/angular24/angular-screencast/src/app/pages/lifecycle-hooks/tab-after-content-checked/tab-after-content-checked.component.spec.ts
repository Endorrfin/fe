import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAfterContentCheckedComponent } from './tab-after-content-checked.component';

describe('TabAfterContentCheckedComponent', () => {
  let component: TabAfterContentCheckedComponent;
  let fixture: ComponentFixture<TabAfterContentCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAfterContentCheckedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAfterContentCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
