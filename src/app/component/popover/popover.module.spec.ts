import { PopoverModule } from './popover.module';

describe('PopoverModule', () => {
  let popoverModule: PopoverModule;

  beforeEach(() => {
    popoverModule = new PopoverModule();
  });

  it('should create an instance', () => {
    expect(popoverModule).toBeTruthy();
  });
});
