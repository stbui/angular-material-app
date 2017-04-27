import { TestBed, inject } from '@angular/core/testing';

import { ChatsService } from './chats.service';

describe('ChatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatsService]
    });
  });

  it('should ...', inject([ChatsService], (service: ChatsService) => {
    expect(service).toBeTruthy();
  }));
});
