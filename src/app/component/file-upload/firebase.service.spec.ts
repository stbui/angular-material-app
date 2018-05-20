import { TestBed, inject } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';

describe('FirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseService]
    });
  });

  it('should be created', inject([FirebaseService], (service: FirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
