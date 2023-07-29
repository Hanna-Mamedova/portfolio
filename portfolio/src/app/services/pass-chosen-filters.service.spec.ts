import { TestBed } from '@angular/core/testing';

import { PassChosenFiltersService } from './pass-chosen-filters.service';

describe('PassChosenFiltersService', () => {
  let service: PassChosenFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassChosenFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
