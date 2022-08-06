import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelComponent } from './label.component';

describe('LabelComponent', () => {
  let component: LabelComponent;
  let fixture: ComponentFixture<LabelComponent>;
  let labelConfig = {
    id: 'projectDetailTitle',
    name: 'projectDetailTitle',
    componentType: 'label',
    visible: true,
    data: 'Dynamic component loader',
    heading: false
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelComponent);
    component = fixture.componentInstance;
    component.config = labelConfig;
    component.data = labelConfig.data;
    fixture.detectChanges();
  });

  it('should display label component if visible true', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display "Dynamic component loader"', () => {
    const labelElement: HTMLElement = fixture.nativeElement;
    expect(labelElement.textContent).toContain('Dynamic component loader');
  });
});
