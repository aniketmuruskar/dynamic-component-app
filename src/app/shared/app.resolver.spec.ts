import { TestBed } from '@angular/core/testing';

import { AppResolver } from './app.resolver';

describe('AppResolver', () => {
  let resolver: AppResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AppResolver);
  });

  xit('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
