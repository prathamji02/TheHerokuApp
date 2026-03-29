const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Exit Intent page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/exit_intent');
});

When('I move the mouse out of the viewport', async function () {
  // Simulating the mouse leaving the viewport natively can be inconsistent in Selenium, 
  // so we trigger the DOM 'mouseleave' event directly via JavaScript to reliably invoke the modal.
  await this.driver.executeScript("document.dispatchEvent(new MouseEvent('mouseleave', {bubbles: true, cancelable: true, clientX: 0, clientY: -10}));");
  await this.driver.sleep(1500); // Allow modal animation to render
});

Then('I should see the exit intent modal', async function () {
  const modal = await this.driver.wait(until.elementLocated(By.id('ouibounce-modal')), 5000);
  const isDisplayed = await modal.isDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('I close the exit intent modal', async function () {
  const closeBtn = await this.driver.findElement(By.css('.modal-footer p'));
  await closeBtn.click();
  
  const modal = await this.driver.findElement(By.id('ouibounce-modal'));
  await this.driver.wait(until.elementIsNotVisible(modal), 5000);
});