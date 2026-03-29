const { Given, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given(/^I am on the A\/B Testing page$/, async function () {
  await this.driver.get('http://the-internet.herokuapp.com/abtest');
});

Then('I should see the heading is either {string} or {string}', async function (option1, option2) {
  const headingLocator = By.css('.example h3');
  
  // Wait until the element is present
  await this.driver.wait(until.elementLocated(headingLocator), 10000);
  
  const heading = await this.driver.findElement(headingLocator);
  const headingText = await heading.getText();
  
  // Assert that the text is one of the two expected values
  expect(headingText.trim()).to.be.oneOf([option1, option2]);
});
