import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAfterContentInitComponent } from './tab-after-content-init.component';

describe('TabAfterContentInitComponent', () => {
  let component: TabAfterContentInitComponent;
  let fixture: ComponentFixture<TabAfterContentInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAfterContentInitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAfterContentInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
