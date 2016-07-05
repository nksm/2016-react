import { ReactToNg2Page } from './app.po';

describe('react-to-ng2 App', function() {
  let page: ReactToNg2Page;

  beforeEach(() => {
    page = new ReactToNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
