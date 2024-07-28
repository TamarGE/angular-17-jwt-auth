import { TestBed } from '@angular/core/testing';

import { AppObservablesService } from './app-observables.service';

describe('AppObservablesService', () => {
  let service: AppObservablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppObservablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
