import { TestBed } from '@angular/core/testing';

import { PageBuilderService } from './page-builder.service';

describe('PageBuilderService', () => {
  let service: PageBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
