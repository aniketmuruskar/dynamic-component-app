import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;
  let checkboxConfig = {
    id: 'projectApproved',
    name: 'projectApproved',
    componentType: 'checkbox',
    label: 'Is project approved from the business?',
    styleClass: 'mt-3',
    labelClass: 'ms-2',
    visible: true,
    disabled: true,
    value: true
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    component.config = checkboxConfig;
    component.data = '';
    fixture.detectChanges();
  });

  it('should display checkbox component if visible true', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
