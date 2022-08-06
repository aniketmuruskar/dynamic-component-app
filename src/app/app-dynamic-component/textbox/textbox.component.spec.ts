import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxComponent } from './textbox.component';

describe('TextboxComponent', () => {
  let component: TextboxComponent;
  let fixture: ComponentFixture<TextboxComponent>;
  let textboxConfig = {
    id: 'projectName',
    name: 'projectName',
    componentType: 'textbox',
    label: 'Project Name',
    placeholder: 'Enter project name',
    styleClass: 'col-md-6 mt-3',
    visible: true,
    disabled: false,
    value: 'Dynamic component angular app'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextboxComponent);
    component = fixture.componentInstance;
    component.config = textboxConfig;
    component.data = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
