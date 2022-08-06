import { Type } from '@angular/core';

export class AddComponent {
    constructor(
        public component: Type<any>,
        public config: any,
        public data: string
    ) {}
}