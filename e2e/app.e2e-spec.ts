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


});

