const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Inputs page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/inputs');
});

When('I enter the value {string} into the input field', async function (value) {
  const inputField = await this.driver.wait(until.elementLocated(By.css('input[type="number"]')), 5000);
  // Always a good practice to clear the field first when reusing an outline scenario
  await inputField.clear(); 
  await inputField.sendKeys(value);
});

Then('the input field value should be {string}', async function (expectedValue) {
  const inputField = await this.driver.findElement(By.css('input[type="number"]'));
  const actualValue = await inputField.getAttribute('value');
  expect(actualValue).to.equal(expectedValue);
});