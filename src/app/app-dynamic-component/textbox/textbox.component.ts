import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {
  @Input() config: any;
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    console.log('TextboxComponent OnInit');
  }

}
