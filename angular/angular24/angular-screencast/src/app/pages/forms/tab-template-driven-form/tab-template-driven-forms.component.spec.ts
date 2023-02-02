import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTemplateDrivenFormsComponent } from './tab-template-driven-forms.component';

describe('TemplateDrivenFormComponent', () => {
  let component: TabTemplateDrivenFormsComponent;
  let fixture: ComponentFixture<TabTemplateDrivenFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabTemplateDrivenFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabTemplateDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
