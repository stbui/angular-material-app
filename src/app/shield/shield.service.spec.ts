import { TestBed } from '@angular/core/testing';

import { ShieldService } from './shield.service';

describe('ShieldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShieldService = TestBed.get(ShieldService);
    expect(service).toBeTruthy();
  });
});
