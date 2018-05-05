import { ChatWidgetModule } from './chat-widget.module';

describe('ChatWidgetModule', () => {
  let chatWidgetModule: ChatWidgetModule;

  beforeEach(() => {
    chatWidgetModule = new ChatWidgetModule();
  });

  it('should create an instance', () => {
    expect(chatWidgetModule).toBeTruthy();
  });
});
