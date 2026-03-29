const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Login page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/login');
});

When('I login with username {string} and password {string}', async function (username, password) {
  await this.driver.findElement(By.id('username')).sendKeys(username);
  await this.driver.findElement(By.id('password')).sendKeys(password);
  
  await this.driver.findElement(By.css('button[type="submit"]')).click();
});

Then('I should see the flash message {string}', async function (expectedMessage) {
  const flashMsg = await this.driver.wait(until.elementLocated(By.id('flash')), 5000);
  const text = await flashMsg.getText();
  expect(text).to.include(expectedMessage);
});