const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Geolocation page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/geolocation');
});

When('I click the Where am I button', async function () {
  const btn = await this.driver.findElement(By.css('button'));
  await btn.click();
});

Then('I should see my latitude and longitude values', async function () {
  // The location API call can take several seconds to return a result to the DOM
  const latElement = await this.driver.wait(until.elementLocated(By.id('lat-value')), 15000);
  const longElement = await this.driver.wait(until.elementLocated(By.id('long-value')), 15000);
  
  const latText = await latElement.getText();
  const longText = await longElement.getText();
  
  expect(latText).to.not.be.empty;
  expect(longText).to.not.be.empty;
});