import { TestBed } from '@angular/core/testing';

import { PaisAPIService } from './pais-api.service';

describe('PaisAPIService', () => {
  let service: PaisAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
