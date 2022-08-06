import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaComponent } from './textarea.component';

describe('TextareaComponent', () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;
  let textareaConfig = {
    id: 'projectFeedback',
    name: 'projectFeedback',
    componentType: 'textarea',
    label: 'Project feedback',
    placeholder: 'Enter project feedback',
    styleClass: 'col-md-6 mt-3',
    rows: 5,
    visible: true,
    data: 'This project is developed in Angular v14'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaComponent);
    component = fixture.componentInstance;
    component.config = textareaConfig;
    component.data = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
