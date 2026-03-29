const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Multiple Windows page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/windows');
});

When('I click the Click Here link', async function () {
  this.originalWindow = await this.driver.getWindowHandle();
  const link = await this.driver.findElement(By.css('.example a'));
  await link.click();
});

Then('a new window should open with text {string}', async function (expectedText) {
  // Wait for the new window/tab to appear
  await this.driver.wait(async () => (await this.driver.getAllWindowHandles()).length === 2, 5000);
  
  const windows = await this.driver.getAllWindowHandles();
  for (const handle of windows) {
    if (handle !== this.originalWindow) {
      await this.driver.switchTo().window(handle);
      break;
    }
  }
  const heading = await this.driver.wait(until.elementLocated(By.css('h3')), 5000);
  expect(await heading.getText()).to.equal(expectedText);
});