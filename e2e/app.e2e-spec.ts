import { MoviecriticPage } from './app.po';

describe('moviecritic App', () => {
  let page: MoviecriticPage;

  beforeEach(() => {
    page = new MoviecriticPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
