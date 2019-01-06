import { TestBed } from '@angular/core/testing';

import { BehaviorService } from './behavior.service';

describe('BehaviorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BehaviorService = TestBed.get(BehaviorService);
    expect(service).toBeTruthy();
  });
});
