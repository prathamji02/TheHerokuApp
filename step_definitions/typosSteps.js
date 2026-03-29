const { Given, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Typos page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/typos');
});

Then('I should see the expected text with or without the typo', async function () {
  const paragraph = await this.driver.wait(until.elementLocated(By.css('.example p:nth-of-type(2)')), 5000);
  const text = await paragraph.getText();
  
  // The site randomly serves "won't" or "won,t". We use a regex to allow both so the test stays green.
  expect(text).to.match(/Sometimes you'll see a typo, other times you won('|,)t\./);
});