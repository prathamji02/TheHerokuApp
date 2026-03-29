const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until, Key } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Key Presses page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/key_presses');
});

When('I press the {string} key', async function (keyName) {
  const target = await this.driver.wait(until.elementLocated(By.id('target')), 5000);
  
  let keyToSend = keyName;
  if (Key[keyName]) {
    keyToSend = Key[keyName]; // Map literal string to WebDriver Key Enum if it matches
  }
  
  await target.sendKeys(keyToSend);
});

Then('the key press result should show {string}', async function (expectedText) {
  const resultEl = await this.driver.findElement(By.id('result'));
  const actualText = await resultEl.getText();
  expect(actualText).to.equal(expectedText);
});