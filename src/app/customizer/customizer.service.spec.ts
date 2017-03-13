import { TestBed, inject } from '@angular/core/testing';

import { CustomizerService } from './customizer.service';

describe('CustomizerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomizerService]
    });
  });

  it('should ...', inject([CustomizerService], (service: CustomizerService) => {
    expect(service).toBeTruthy();
  }));
});
