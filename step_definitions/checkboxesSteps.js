const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

const CHECKBOXES_URL = 'https://the-internet.herokuapp.com/checkboxes';

// Reusable function to get checkbox elements
async function getCheckboxes(driver) {
  const checkboxes = await driver.findElements(By.css('#checkboxes input[type="checkbox"]'));
  return checkboxes;
}

Given('I am on the Checkboxes page', async function () {
  await this.driver.get(CHECKBOXES_URL);
  await this.driver.wait(until.elementLocated(By.id('checkboxes')), 5000);
});

Then('the first checkbox should not be selected', async function () {
  const checkboxes = await getCheckboxes(this.driver);
  const isSelected = await checkboxes[0].isSelected();
  expect(isSelected).to.be.false;
});

Then('the second checkbox should be selected', async function () {
  const checkboxes = await getCheckboxes(this.driver);
  const isSelected = await checkboxes[1].isSelected();
  expect(isSelected).to.be.true;
});

When('I click the first checkbox', async function () {
  const checkboxes = await getCheckboxes(this.driver);
  await checkboxes[0].click();
  await this.driver.sleep(2000); // For visual confirmation
});

Then('the first checkbox should be selected', async function () {
  const checkboxes = await getCheckboxes(this.driver);
  const isSelected = await checkboxes[0].isSelected();
  expect(isSelected).to.be.true;
});

When('I click the second checkbox', async function () {
    const checkboxes = await getCheckboxes(this.driver);
    await checkboxes[1].click();
    await this.driver.sleep(2000); // For visual confirmation
});

Then('the second checkbox should not be selected', async function () {
  const checkboxes = await getCheckboxes(this.driver);
  const isSelected = await checkboxes[1].isSelected();
  expect(isSelected).to.be.false;
});
