import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppComponentHostDirective } from './app-component-host.directive';
import { LabelComponent } from './app-dynamic-component/label/label.component';
import { TextboxComponent } from './app-dynamic-component/textbox/textbox.component';
import { DropdownComponent } from './app-dynamic-component/dropdown/dropdown.component';
import { CheckboxComponent } from './app-dynamic-component/checkbox/checkbox.component';
import { RadioComponent } from './app-dynamic-component/radio/radio.component';
import { TextareaComponent } from './app-dynamic-component/textarea/textarea.component';
import { AppDynamicComponent } from './app-dynamic-component/app-dynamic.component';
import { AppUIBuilderComponent } from './app-ui-builder/app-ui-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponentHostDirective,
    LabelComponent,
    TextboxComponent,
    DropdownComponent,
    CheckboxComponent,
    RadioComponent,
    TextareaComponent,
    AppDynamicComponent,
    AppUIBuilderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
