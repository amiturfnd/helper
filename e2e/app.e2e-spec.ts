import { HelperPage } from './app.po';

describe('helper App', () => {
  let page: HelperPage;

  beforeEach(() => {
    page = new HelperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
