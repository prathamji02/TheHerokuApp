const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Challenging DOM page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/challenging_dom');
  await this.driver.wait(until.elementLocated(By.css('h3')), 10000);
  // Brief pause to allow visual confirmation
  await this.driver.sleep(2000);
});

When('I click the blue button', async function () {
  // Using a simple class selector for the first button
  const blueButton = await this.driver.findElement(By.css('.button'));
  await blueButton.click();
});

When('I click the red button', async function () {
  // Using a compound class selector for precision
  const redButton = await this.driver.findElement(By.css('.button.alert'));
  await redButton.click();
});

When('I click the green button', async function () {
  // Using a compound class selector for precision
  const greenButton = await this.driver.findElement(By.css('.button.success'));
  await greenButton.click();
});

Then('I should see the canvas', async function () {
  // ID is the most reliable locator
  const canvas = await this.driver.wait(until.elementLocated(By.id('canvas')), 10000);
  expect(await canvas.isDisplayed()).to.be.true;
});

Then('I should be able to interact with the table', async function () {
  // XPath is ideal for navigating the table structure to find a specific cell/link
  const firstEditLink = await this.driver.findElement(By.xpath('//table//tbody/tr[1]/td[7]/a[1]'));
  await firstEditLink.click();
  // Brief pause to notice the URL change
  await this.driver.sleep(500);
  const currentUrl = await this.driver.getCurrentUrl();
  expect(currentUrl).to.contain('#edit');

  const firstDeleteLink = await this.driver.findElement(By.xpath('//table//tbody/tr[1]/td[7]/a[2]'));
  await firstDeleteLink.click();
  await this.driver.sleep(500);
  const newUrl = await this.driver.getCurrentUrl();
  expect(newUrl).to.contain('#delete');
});
