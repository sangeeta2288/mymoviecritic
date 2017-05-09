var fs = require('fs');

describe('moviecritic App', () => {
  //let commonUrl = 'https://mymoviecritic.herokuapp.com/static';
  let commonUrl = 'http://localhost:4200';

  it('should test blank search warning on advanced search page', () => {
    browser.get(`${commonUrl}/advancedsearch`);
    browser.waitForAngular();
    element(by.css(".btn.btn-success")).click();
    browser.waitForAngular();
    var warningText = element(by.css('.alert.alert-danger'));
    expect(warningText.getText()).toEqual('At-least one of Genre or Title value should be present to perform search!!');
  });

  it('should test successful search scenario 1 on advanced search page - Furious 7', () => {
    browser.get(`${commonUrl}/advancedsearch`);
    browser.waitForAngular();

    element(by.id("TitleField")).sendKeys('speed');
    browser.waitForAngular();
    element(by.css(".btn.btn-success")).click();
    browser.waitForAngular();

    var h3_elements = element.all(by.tagName("h3"));
    expect(h3_elements.getText()).toContain('Furious 7');
  });

  it('should test successful search scenario 2 on advanced search page - Turbo movie', () => {
    browser.get(`${commonUrl}/advancedsearch`);
    browser.waitForAngular();

    element(by.id("TitleField")).sendKeys('speed');
    browser.waitForAngular();
    element(by.css(".btn.btn-success")).click();
    browser.waitForAngular();

    var h3_elements = element.all(by.tagName("h3"));
    expect(h3_elements.getText()).toContain('Turbo');
  });

  it('should test advanced search page for field Title', () => {
    browser.get(`${commonUrl}/advancedsearch`);
    var h3_elements = element(by.tagName("h3"));
    expect(h3_elements.getText()).toContain('Keyword/Title');
  });

  it('should test advanced search page for field Genres', () => {
    browser.get(`${commonUrl}/advancedsearch`);
    var GenreElement = element(by.id("GenreList"));
    expect(GenreElement.getText()).toContain('Genres');
  });

  it('should test advanced search page for field Rating', () => {
    browser.get(`${commonUrl}/advancedsearch`);
    var RatingElement = element(by.id("RatingID"));
    expect(RatingElement.getText()).toContain('Rating');
  });

  it('should test advanced search page for field Year', () => {
    browser.get(`${commonUrl}/advancedsearch`);
    var YearElement = element(by.id("YearID"));
    expect(YearElement.getText()).toContain('Year');
  });

  it('should test advanced search page for field Votes', () => {
    browser.get(`${commonUrl}/advancedsearch`);
    var VotesElement = element(by.id("VotesID"));
    expect(VotesElement.getText()).toContain('No. of votes (Minimum)');
  });


  it('should test home page for Now Playing ', () => {
    browser.get(`${commonUrl}/home`);
    var h2_elements = element(by.tagName("h2"));
    expect(h2_elements.getText()).toContain('Now Playing');
  });

  it('should test home page for Top Rated', () => {
    browser.get(`${commonUrl}/home`);
    var h2_elements = element(by.tagName("h2"));
    expect(h2_elements.getText()).toContain('Top Rated');
  });

  it('should test home page for Up Coming', () => {
    browser.get(`${commonUrl}/home`);
    var h2_elements = element(by.tagName("h2"));
    expect(h2_elements.getText()).toContain('Up Coming');
  });

});

