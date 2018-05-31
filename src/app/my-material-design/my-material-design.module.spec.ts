import { MyMaterialDesignModule } from './my-material-design.module';

describe('MyMaterialDesignModule', () => {
  let myMaterialDesignModule: MyMaterialDesignModule;

  beforeEach(() => {
    myMaterialDesignModule = new MyMaterialDesignModule();
  });

  it('should create an instance', () => {
    expect(myMaterialDesignModule).toBeTruthy();
  });
});
