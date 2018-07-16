import { KneeModule } from './knee.module';

describe('KneeModule', () => {
  let kneeModule: KneeModule;

  beforeEach(() => {
    kneeModule = new KneeModule();
  });

  it('should create an instance', () => {
    expect(kneeModule).toBeTruthy();
  });
});
