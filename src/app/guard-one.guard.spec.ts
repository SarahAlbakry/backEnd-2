import { TestBed } from '@angular/core/testing';

import { GuardOneGuard } from './guard-one.guard';

describe('GuardOneGuard', () => {
  let guard: GuardOneGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardOneGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
