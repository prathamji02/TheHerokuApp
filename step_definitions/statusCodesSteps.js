const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Status Codes page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/status_codes');
});

When('I click on the {string} status code', async function (codeNumber) {
  const link = await this.driver.wait(until.elementLocated(By.linkText(codeNumber)), 5000);
  await link.click();
});

Then('I should see the status code message containing {string}', async function (codeNumber) {
  const content = await this.driver.wait(until.elementLocated(By.css('.example p')), 5000);
  const text = await content.getText();
  
  const expectedString = `This page returned a ${codeNumber} status code.`;
  expect(text).to.include(expectedString);
});