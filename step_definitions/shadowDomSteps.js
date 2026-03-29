const { Given, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Shadow DOM page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/shadowdom');
});

Then('I should see the text {string} from within the shadow root', async function (expectedText) {
  const hostElement = await this.driver.wait(until.elementLocated(By.css('my-paragraph')), 5000);

  // Get the shadow root from the host element
  const shadowRoot = await this.driver.executeScript('return arguments[0].shadowRoot', hostElement);

  // Find the element within the shadow root
  // Note: shadowRoot.findElement() is the correct context for searching
  const slotElement = await shadowRoot.findElement(By.css('slot[name="my-text"]'));
  const text = await slotElement.getText();

  expect(text).to.equal(expectedText);
});