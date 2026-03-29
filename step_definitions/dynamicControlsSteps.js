const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Dynamic Controls page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/dynamic_controls');
});

When('I click the Remove button', async function () {
  const btn = await this.driver.findElement(By.xpath("//form[@id='checkbox-example']/button"));
  await btn.click();
});

When('I click the Add button', async function () {
  const btn = await this.driver.findElement(By.xpath("//form[@id='checkbox-example']/button"));
  await btn.click();
});

Then('I should see the message {string}', async function (expectedMessage) {
  const messageEl = await this.driver.wait(until.elementLocated(By.id('message')), 15000);
  await this.driver.wait(until.elementIsVisible(messageEl), 15000);
  const text = await messageEl.getText();
  expect(text).to.equal(expectedMessage);
});

Then('the checkbox should be gone', async function () {
  const checkboxes = await this.driver.findElements(By.id('checkbox'));
  expect(checkboxes.length).to.equal(0);
});

Then('the checkbox should be present', async function () {
  const checkbox = await this.driver.wait(until.elementLocated(By.id('checkbox')), 5000);
  expect(await checkbox.isDisplayed()).to.be.true;
});

When('I click the Enable button', async function () {
  const btn = await this.driver.findElement(By.xpath("//form[@id='input-example']/button"));
  await btn.click();
});

When('I click the Disable button', async function () {
  const btn = await this.driver.findElement(By.xpath("//form[@id='input-example']/button"));
  await btn.click();
});

Then('the input field should be {word}', async function (state) {
  const expectedState = state === 'enabled';
  const input = await this.driver.findElement(By.xpath("//form[@id='input-example']/input"));
  await this.driver.wait(async () => (await input.isEnabled()) === expectedState, 15000);
  const isEnabled = await input.isEnabled();
  expect(isEnabled).to.equal(expectedState);
});