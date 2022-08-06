import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() config: any;
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    console.log('CheckboxComponent ngOnInit');
  }

}
