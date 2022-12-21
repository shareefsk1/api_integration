import { TestBed } from '@angular/core/testing';

import { SbibankService } from './sbibank.service';

describe('SbibankService', () => {
  let service: SbibankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SbibankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
