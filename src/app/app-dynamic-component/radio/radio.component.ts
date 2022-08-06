import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @Input() config: any;
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    console.log('RadioComponent OnInit');
  }

}
