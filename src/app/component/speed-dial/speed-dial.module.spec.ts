import { SpeedDialModule } from './speed-dial.module';

describe('SpeedDialModule', () => {
  let speedDialModule: SpeedDialModule;

  beforeEach(() => {
    speedDialModule = new SpeedDialModule();
  });

  it('should create an instance', () => {
    expect(speedDialModule).toBeTruthy();
  });
});
