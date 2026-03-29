const { Given, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Disappearing Elements page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/disappearing_elements');
  await this.driver.wait(until.elementLocated(By.css('h3')), 5000);
});

Then('I should see the {string} menu item', async function (menuText) {
  const elements = await this.driver.findElements(By.xpath(`//ul/li/a[text()='${menuText}']`));
  expect(elements.length).to.be.greaterThan(0, `Menu item "${menuText}" was not found.`);
  const isDisplayed = await elements[0].isDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('the {string} menu item may or may not be displayed', async function (menuText) {
  const elements = await this.driver.findElements(By.xpath(`//ul/li/a[text()='${menuText}']`));
  if (elements.length > 0) {
    const isDisplayed = await elements[0].isDisplayed();
    expect(isDisplayed).to.be.true;
  } else {
    expect(elements.length).to.equal(0);
  }
});