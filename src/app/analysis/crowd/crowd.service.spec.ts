import { TestBed, inject } from '@angular/core/testing';

import { CrowdService } from './crowd.service';

describe('CrowdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrowdService]
    });
  });

  it('should be created', inject([CrowdService], (service: CrowdService) => {
    expect(service).toBeTruthy();
  }));
});
