import { TestBed, inject } from '@angular/core/testing';

import { FileManagerService } from './file-manager.service';

describe('FileManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileManagerService]
    });
  });

  it('should be created', inject([FileManagerService], (service: FileManagerService) => {
    expect(service).toBeTruthy();
  }));
});
