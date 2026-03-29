const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Context Menu page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/context_menu');
});

When('I right-click on the hotspot', async function () {
  const hotspot = await this.driver.wait(until.elementLocated(By.id('hot-spot')), 5000);
  const actions = this.driver.actions({ async: true });
  await actions.contextClick(hotspot).perform();
});

Then('I should see a JavaScript alert with text {string}', async function (expectedText) {
  await this.driver.wait(until.alertIsPresent(), 5000);
  const alert = await this.driver.switchTo().alert();
  const alertText = await alert.getText();
  expect(alertText).to.equal(expectedText);
});

Then('I accept the alert', async function () {
  const alert = await this.driver.switchTo().alert();
  await alert.accept();
});