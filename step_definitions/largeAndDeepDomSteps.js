const { Given, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Large & Deep DOM page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/large');
});

Then('I should be able to locate the sibling {string}', async function (siblingId) {
  const id = `sibling-${siblingId}`;
  const sibling = await this.driver.wait(until.elementLocated(By.id(id)), 5000);
  const text = await sibling.getText();
  expect(text).to.equal(siblingId);
});

Then('I should be able to locate the table cell at row {string} and column {string}', async function (row, col) {
  const className = `column-${col}`;
  // Looking for the intersection of the specific row and column classes within the table
  const cell = await this.driver.wait(until.elementLocated(By.css(`tr.row-${row} td.${className}`)), 5000);
  const text = await cell.getText();
  expect(text).to.equal(`${row}.${col}`);
});