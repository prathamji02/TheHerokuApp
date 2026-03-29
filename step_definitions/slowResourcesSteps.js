const { Given, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Slow Resources page', async function () {
  // The page load itself will be slow, handled by the driver's page load strategy.
  await this.driver.get('http://the-internet.herokuapp.com/slow');
});

Then('I should see the page content after a delay', async function () {
  // The default timeout in hooks.js is 30 seconds, which is enough for this page.
  // We just need to verify that an element is eventually present.
  const contentDiv = await this.driver.wait(until.elementLocated(By.id('content')), 35000);
  const isDisplayed = await contentDiv.isDisplayed();
  expect(isDisplayed).to.be.true;
});