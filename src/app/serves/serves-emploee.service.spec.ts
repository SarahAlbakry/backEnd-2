import { TestBed } from '@angular/core/testing';

import { ServesEmploeeService } from './serves-emploee.service';

describe('ServesEmploeeService', () => {
  let service: ServesEmploeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServesEmploeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
