import { TestBed } from '@angular/core/testing';

import { StudentsDetailsApiService } from './students-details-api.service';

describe('StudentsDetailsApiService', () => {
  let service: StudentsDetailsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsDetailsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
