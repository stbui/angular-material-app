import { WebsocketModule } from './websocket.module';

describe('WebsocketModule', () => {
  let websocketModule: WebsocketModule;

  beforeEach(() => {
    websocketModule = new WebsocketModule();
  });

  it('should create an instance', () => {
    expect(websocketModule).toBeTruthy();
  });
});
