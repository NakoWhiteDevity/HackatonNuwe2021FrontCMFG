import { TestBed } from '@angular/core/testing';

import { PophandlerService } from './pophandler.service';

describe('PophandlerService', () => {
  let service: PophandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PophandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
