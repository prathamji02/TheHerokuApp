const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Dropdown page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/dropdown');
});

When('I select {string} from the dropdown', async function (optionText) {
  const dropdownLocator = By.id('dropdown');
  const dropdown = await this.driver.wait(until.elementLocated(dropdownLocator), 5000);
  await dropdown.click();
  
  const optionLocator = By.xpath(`//option[text()='${optionText}']`);
  const option = await this.driver.wait(until.elementLocated(optionLocator), 5000);
  await option.click();
});

Then('{string} should be selected', async function (optionText) {
  const optionLocator = By.xpath(`//option[text()='${optionText}']`);
  const option = await this.driver.wait(until.elementLocated(optionLocator), 5000);
  const isSelected = await option.isSelected();
  expect(isSelected).to.be.true;
});