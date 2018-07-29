import { MessageModule } from './message.module';

describe('MessageModule', () => {
  let messageModule: MessageModule;

  beforeEach(() => {
    messageModule = new MessageModule();
  });

  it('should create an instance', () => {
    expect(messageModule).toBeTruthy();
  });
});
