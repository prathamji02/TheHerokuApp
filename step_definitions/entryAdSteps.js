const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Entry Ad page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/entry_ad');
});

When('I wait for the modal to appear', async function () {
  const modalTitle = await this.driver.wait(until.elementLocated(By.css('.modal-title')), 10000);
  await this.driver.wait(until.elementIsVisible(modalTitle), 10000);
  
  // Adding a short sleep ensures CSS transition animations finish before clicking
  await this.driver.sleep(1500); 
});

When('I click the close button on the modal', async function () {
  const closeBtn = await this.driver.findElement(By.css('.modal-footer p'));
  await closeBtn.click();
});

Then('the modal should no longer be visible', async function () {
  const modal = await this.driver.findElement(By.css('.modal'));
  const isVisible = await modal.isDisplayed();
  expect(isVisible).to.be.false;
});