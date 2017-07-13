import { Ang2S6Assign6.1Page } from './app.po';

describe('ang2-s6-assign6.1 App', () => {
  let page: Ang2S6Assign6.1Page;

  beforeEach(() => {
    page = new Ang2S6Assign6.1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
