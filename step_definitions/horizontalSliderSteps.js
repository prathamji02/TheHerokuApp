const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Horizontal Slider page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/horizontal_slider');
});

When('I set the slider value to {string}', async function (value) {
  const slider = await this.driver.wait(until.elementLocated(By.css('input[type="range"]')), 5000);
  // Using JavaScript is the most reliable way to interact with type="range" inputs across all browsers
  await this.driver.executeScript(`
    arguments[0].value = arguments[1];
    arguments[0].dispatchEvent(new Event('change'));
  `, slider, value);
});

Then('the slider value should be {string}', async function (expectedValue) {
  const rangeValue = await this.driver.wait(until.elementLocated(By.id('range')), 5000);
  expect(await rangeValue.getText()).to.equal(expectedValue);
});