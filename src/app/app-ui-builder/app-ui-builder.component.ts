import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AddComponent } from '../add.component';
import { AppComponentHostDirective } from '../app-component-host.directive';

@Component({
    selector: 'app-ui-builder',
    templateUrl: './app-ui-builder.component.html',
    styleUrls: []
  })
  export class AppUIBuilderComponent implements OnInit, OnDestroy, OnChanges {
    @Input() components!: AddComponent[];
    @ViewChild(AppComponentHostDirective, { static: true, read: AppComponentHostDirective })
    componentHost!: AppComponentHostDirective;

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        this.buildComponents();
    }

    ngOnInit(): void {
        this.buildComponents();
    }

    private buildComponents() {
        this.componentHost.viewContainerRef.clear();

        for (const component of this.components) {
            if (!!component) {
                const viewContainerRef = this.componentHost.viewContainerRef;
                const componentRef = viewContainerRef.createComponent<AddComponent>(component.component);
                componentRef.instance.config =  component.config;
                componentRef.instance.data = component.config.data;
            }
        }
    }

    ngOnDestroy(): void {
        this.components = [];
    }
  }