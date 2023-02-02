import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOnDestroyComponent } from './tab-on-destroy.component';

describe('TabOnDestroyComponent', () => {
  let component: TabOnDestroyComponent;
  let fixture: ComponentFixture<TabOnDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabOnDestroyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabOnDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
