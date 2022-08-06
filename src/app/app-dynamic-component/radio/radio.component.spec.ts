import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { RadioComponent } from './radio.component';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;
  let radioConfig = {
    id: 'projectCloudTechnology',
    name: 'projectCloudTechnology',
    componentType: 'radio',
    label: 'Project cloud technology',
    styleClass: 'mt-1',
    labelClass: 'ms-2',
    value: '2',
    radioOptionList: [
        { key: 1, value: 'AWS' },
        { key: 2, value: 'MS Azure' },
        { key: 3, value: 'GCP' }
    ],
    visible: true,
    disabled: false
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
    component.config = radioConfig;
    component.data = '';
    fixture.detectChanges();
  });

  it('should display radio component if visible true', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
