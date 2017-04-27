import { TestBed, inject } from '@angular/core/testing';

import { MailService } from './mail.service';

describe('MailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailService]
    });
  });

  it('should ...', inject([MailService], (service: MailService) => {
    expect(service).toBeTruthy();
  }));
});
