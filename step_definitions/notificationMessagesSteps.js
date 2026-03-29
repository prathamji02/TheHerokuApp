const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Notification Messages page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/notification_message_rendered');
});

When('I click the Click here link for notifications', async function () {
  const link = await this.driver.findElement(By.linkText('Click here'));
  await link.click();
});

Then('I should see a notification message indicating success or failure', async function () {
  const flash = await this.driver.wait(until.elementLocated(By.id('flash')), 5000);
  const flashText = await flash.getText();
  const isValidMessage = flashText.includes('Action successful') || 
                         flashText.includes('Action unsuccesful');
  expect(isValidMessage).to.be.true;
});