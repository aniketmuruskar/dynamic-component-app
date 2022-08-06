import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponentHostDirective } from './app-component-host.directive';
import { AppUIBuilderComponent } from './app-ui-builder/app-ui-builder.component';

describe('AppComponentHostDirective', () => {
  let fixture: ComponentFixture<AppUIBuilderComponent>;
  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [ AppUIBuilderComponent, AppComponentHostDirective ]
    })
    .createComponent(AppUIBuilderComponent);

    fixture.detectChanges();
  });

  xit('should create an instance', () => {
    const directive = fixture.nativeElement.queryAll(By.directive(AppComponentHostDirective));
    expect(directive).toBeTruthy();
  });
});
