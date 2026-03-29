const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Shifting Content page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/shifting_content');
});

When('I click the link for the Menu example', async function () {
  const menuLink = await this.driver.wait(until.elementLocated(By.linkText('Example 1: Menu Element')), 5000);
  await menuLink.click();
});

Then('I should be on the shifting menu page', async function () {
  await this.driver.wait(until.urlContains('/shifting_content/menu'), 5000);
  const currentUrl = await this.driver.getCurrentUrl();
  expect(currentUrl).to.include('/shifting_content/menu');
  const listItems = await this.driver.findElements(By.css('li'));
  expect(listItems.length).to.be.greaterThan(0);
});