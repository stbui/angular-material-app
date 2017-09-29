import { ApmModule } from './apm.module';

describe('ApmModule', () => {
  let apmModule: ApmModule;

  beforeEach(() => {
    apmModule = new ApmModule();
  });

  it('should create an instance', () => {
    expect(apmModule).toBeTruthy();
  });
});
