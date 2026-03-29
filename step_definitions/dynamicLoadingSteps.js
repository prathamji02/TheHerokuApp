const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Dynamic Loading Example {int} page', async function (exampleNumber) {
  await this.driver.get(`http://the-internet.herokuapp.com/dynamic_loading/${exampleNumber}`);
});

When('I click the Start loading button', async function () {
  const startBtn = await this.driver.findElement(By.css('#start button'));
  await startBtn.click();
});

Then('I wait for the loading bar to disappear', async function () {
  const loading = await this.driver.wait(until.elementLocated(By.id('loading')), 5000);
  await this.driver.wait(until.elementIsVisible(loading), 5000);
  await this.driver.wait(until.elementIsNotVisible(loading), 15000);
});

Then('I should see the text {string}', async function (expectedText) {
  const finishText = await this.driver.wait(until.elementLocated(By.id('finish')), 10000);
  const text = await finishText.getText();
  expect(text).to.equal(expectedText);
});