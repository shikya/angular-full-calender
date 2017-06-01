import { AngularFullCalenderPage } from './app.po';

describe('angular-full-calender App', () => {
  let page: AngularFullCalenderPage;

  beforeEach(() => {
    page = new AngularFullCalenderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
