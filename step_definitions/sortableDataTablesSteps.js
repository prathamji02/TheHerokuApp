const { Given, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Sortable Data Tables page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/tables');
});

Then('the due amount for {string} {string} should be {string}', async function (firstName, lastName, expectedAmount) {
  // Using XPath to find the row containing both the specific First Name and Last Name, then extracting the Due column (4th column)
  const rowXpath = `//table[@id='table1']//tr[td[text()='${lastName}'] and td[text()='${firstName}']]`;
  const dueAmountCell = await this.driver.wait(until.elementLocated(By.xpath(`${rowXpath}/td[4]`)), 5000);
  const actualAmount = await dueAmountCell.getText();
  expect(actualAmount).to.equal(expectedAmount);
});