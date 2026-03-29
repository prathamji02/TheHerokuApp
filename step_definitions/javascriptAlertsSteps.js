const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the JavaScript Alerts page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/javascript_alerts');
});

When('I click the {string} button', async function (buttonText) {
  const btn = await this.driver.findElement(By.xpath(`//button[text()='${buttonText}']`));
  await btn.click();
});

When('I accept the JavaScript alert', async function () {
  await this.driver.wait(until.alertIsPresent(), 5000);
  const alert = await this.driver.switchTo().alert();
  await alert.accept();
});

When('I dismiss the JavaScript alert', async function () {
  await this.driver.wait(until.alertIsPresent(), 5000);
  const alert = await this.driver.switchTo().alert();
  await alert.dismiss();
});

When('I type {string} into the prompt and accept it', async function (text) {
  await this.driver.wait(until.alertIsPresent(), 5000);
  const alert = await this.driver.switchTo().alert();
  await alert.sendKeys(text);
  await alert.accept();
});

Then('the alert result should be {string}', async function (expectedText) {
  const resultEl = await this.driver.findElement(By.id('result'));
  const actualText = await resultEl.getText();
  expect(actualText).to.equal(expectedText);
});