const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Dynamic Content page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/dynamic_content');
});

When('I record the initial content', async function () {
  const contentLocators = await this.driver.findElements(By.css('.large-10.columns'));
  this.initialTexts = [];
  for (let el of contentLocators) {
    this.initialTexts.push(await el.getText());
  }
});

When('I refresh the page', async function () {
  await this.driver.navigate().refresh();
});

Then('the content should be different from the initial content', async function () {
  const contentLocators = await this.driver.findElements(By.css('.large-10.columns'));
  const currentTexts = await Promise.all(contentLocators.map(el => el.getText()));
  expect(currentTexts).to.not.deep.equal(this.initialTexts);
});