import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddComponent } from '../add.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './app-dynamic.component.html',
  styleUrls: []
})
export class AppDynamicComponent implements OnInit {
  components: AddComponent[] = [];

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.components = data['page'];
    });
  }
}