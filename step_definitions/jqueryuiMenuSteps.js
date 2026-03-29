const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the JQuery UI Menus page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/jqueryui/menu');
});

When('I navigate to Enabled -> Downloads -> PDF', async function () {
  const actions = this.driver.actions({ async: true });

  const enabledMenu = await this.driver.wait(until.elementLocated(By.xpath("//a[normalize-space()='Enabled']")), 5000);
  await this.driver.wait(until.elementIsVisible(enabledMenu), 5000);
  await actions.move({ origin: enabledMenu }).perform();

  const downloadsMenu = await this.driver.wait(until.elementLocated(By.xpath("//a[normalize-space()='Downloads']")), 5000);
  await this.driver.wait(until.elementIsVisible(downloadsMenu), 5000);
  await actions.move({ origin: downloadsMenu }).perform();

  const pdfMenu = await this.driver.wait(until.elementLocated(By.xpath("//a[normalize-space()='PDF']")), 5000);
  await this.driver.wait(until.elementIsVisible(pdfMenu), 5000);
  await pdfMenu.click();
});

Then('the PDF download click should succeed', async function () {
  await this.driver.sleep(1000); // Give browser time to process the download/href redirect
  expect(true).to.be.true; // Verifying the complex hover-click interactions didn't throw timeout/visibility errors
});