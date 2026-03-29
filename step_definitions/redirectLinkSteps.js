const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Redirect Link page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/redirector');
});

When('I click the redirect link', async function () {
  const link = await this.driver.findElement(By.id('redirect'));
  await link.click();
});

Then('I should be redirected to the status codes page', async function () {
  // Wait for the URL to completely change after the redirect
  await this.driver.wait(until.urlContains('/status_codes'), 5000);
  
  const currentUrl = await this.driver.getCurrentUrl();
  expect(currentUrl).to.include('/status_codes');
});