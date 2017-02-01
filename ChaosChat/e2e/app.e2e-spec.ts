import { ChaosChatPage } from './app.po';

describe('chaos-chat App', function() {
  let page: ChaosChatPage;

  beforeEach(() => {
    page = new ChaosChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
