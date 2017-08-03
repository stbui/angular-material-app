import { AngularMaterialAppPage } from './app.po';

describe('angular-material-app App', () => {
  let page: AngularMaterialAppPage;

  beforeEach(() => {
    page = new AngularMaterialAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
