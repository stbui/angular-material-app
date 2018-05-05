import { TestBed, inject } from '@angular/core/testing';

import { ChatWidgetService } from './chat-widget.service';

describe('ChatWidgetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatWidgetService]
    });
  });

  it('should be created', inject([ChatWidgetService], (service: ChatWidgetService) => {
    expect(service).toBeTruthy();
  }));
});
