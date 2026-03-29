const { Given, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Basic Auth page with credentials {string} and {string}', async function (username, password) {
  // Construct the URL with embedded credentials
  const url = `http://${username}:${password}@the-internet.herokuapp.com/basic_auth`;
  await this.driver.get(url);
  // Wait for 2 seconds to see the result
  await this.driver.sleep(2000);
});

Then('I should see a message containing {string}', async function (expectedMessage) {
  // Wait for the success message to be visible
  const successMessageLocator = By.css('.example p');
  const successMessageElement = await this.driver.wait(until.elementLocated(successMessageLocator), 5000);
  
  // Get the text from the element and assert that it contains the expected message
  const messageText = await successMessageElement.getText();
  expect(messageText).to.contain(expectedMessage, 'The success message did not contain the expected text.');
});
