import { Injectable } from '@angular/core';
import { AddComponent } from '../add.component';
import { CheckboxComponent } from '../app-dynamic-component/checkbox/checkbox.component';
import { DropdownComponent } from '../app-dynamic-component/dropdown/dropdown.component';
import { LabelComponent } from '../app-dynamic-component/label/label.component';
import { RadioComponent } from '../app-dynamic-component/radio/radio.component';
import { TextareaComponent } from '../app-dynamic-component/textarea/textarea.component';
import { TextboxComponent } from '../app-dynamic-component/textbox/textbox.component';

@Injectable({
  providedIn: 'root'
})
export class PageBuilderService {

  constructor() { }

  buildPage(pageElements: any): any {
    let pageDetails: Array<any> = [];
    pageElements.forEach((page: any) => {
      pageDetails.push(this.getPageElement(page));
    })

    return pageDetails;
  }

  private getPageElement(page: any): AddComponent | void {

    if (page.componentType === 'label') {
      return new AddComponent(LabelComponent, page, page.data);
    } else if (page.componentType === 'textbox') {
      return new AddComponent(TextboxComponent, page, page.value);
    } else if (page.componentType === 'dropdown') {
      return new AddComponent(DropdownComponent, page, page.value);
    } else if (page.componentType === 'checkbox') {
      return new AddComponent(CheckboxComponent, page, page.value);
    } else if (page.componentType === 'radio') {
      return new AddComponent(RadioComponent, page, page.value);
    } else if (page.componentType === 'textarea') {
      return new AddComponent(TextareaComponent, page, page.value);
    }
  }
}
