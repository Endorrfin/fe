import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAfterViewInitComponent } from './tab-after-view-init.component';

describe('TabAfterViewInitComponent', () => {
  let component: TabAfterViewInitComponent;
  let fixture: ComponentFixture<TabAfterViewInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAfterViewInitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAfterViewInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
