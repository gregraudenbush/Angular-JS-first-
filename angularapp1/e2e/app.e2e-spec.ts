import { Angularapp1Page } from './app.po';

describe('angularapp1 App', () => {
  let page: Angularapp1Page;

  beforeEach(() => {
    page = new Angularapp1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
