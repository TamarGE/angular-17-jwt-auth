import { TestBed } from '@angular/core/testing';

import { EnviromentAppService } from './enviroment-app.service';

describe('EnviromentAppService', () => {
  let service: EnviromentAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviromentAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
