import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;
  let dropdownConfig = {
    id:'projectStatus',
    name:'projectStatus',
    componentType:'dropdown',
    label:'Project Status',
    styleClass:'col-md-6 mt-3',
    visible: true,
    disabled: false,
    value:2,
    dropdownList: [
      { key:1, value: 'Not Started' },
      { key:2, value: 'Kick off' },
      { key:3, value: 'In Progress' },
      { key:4, value: 'On Hold' },
      { key:5, value: 'Completed' }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    component.config = dropdownConfig;
    component.data = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
