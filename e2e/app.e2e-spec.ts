import { NavigationAngular2MaterialPage } from './app.po';

describe('navigation-angular2-material App', () => {
  let page: NavigationAngular2MaterialPage;

  beforeEach(() => {
    page = new NavigationAngular2MaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
