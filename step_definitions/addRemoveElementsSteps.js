const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

// Re-using the Given step from a previous feature would be ideal,
// but for clarity, we are defining it again here.
Given(/^I am on the Add\/Remove Elements page$/, async function () {
  await this.driver.get('http://the-internet.herokuapp.com/add_remove_elements/');
  // Adding a 2-second pause for debugging as requested
  await new Promise(resolve => setTimeout(resolve, 2000));
});

When('I click the {string} button', async function (buttonText) {
  let locator;
  if (buttonText === 'Add Element') {
    // Using a CSS attribute selector for the 'onclick' event is very specific and stable.
    locator = By.css('button[onclick="addElement()"]');
  } else if (buttonText === 'Delete') {
    // The dynamically added button has a clear, descriptive class name.
    locator = By.css('.added-manually');
  } else {
    throw new Error(`Button text "${buttonText}" is not recognized.`);
  }

  const button = await this.driver.findElement(locator);

  // Store a reference to the button if it's the one we intend to check for staleness later
  if (buttonText === 'Delete') {
    this.lastClickedButton = button;
  }

  await button.click();
});

Then('I should see a {string} button appear', async function (buttonText) {
  const deleteButtonLocator = By.css('.added-manually');
  await this.driver.wait(until.elementLocated(deleteButtonLocator), 5000, `The "${buttonText}" button did not appear in time.`);
  const deleteButton = await this.driver.findElement(deleteButtonLocator);
  expect(await deleteButton.isDisplayed()).to.be.true;
});

When('I wait until the {string} button is visible', async function (buttonText) {
  const deleteButtonLocator = By.css('.added-manually');
  await this.driver.wait(until.elementIsVisible(await this.driver.findElement(deleteButtonLocator)), 5000, `The "${buttonText}" button was not visible in time.`);
});

Then('the {string} button should be removed', async function (buttonText) {
  if (!this.lastClickedButton) {
    throw new Error('A button reference was not stored. Make sure the "When I click..." step ran correctly.');
  }
  // Wait for the specific element we clicked to become stale.
  await this.driver.wait(until.stalenessOf(this.lastClickedButton), 5000, `The "${buttonText}" button was not removed in time.`);

  // As a final check, verify no such elements exist anymore.
  const remainingElements = await this.driver.findElements(By.css('.added-manually'));
  expect(remainingElements.length).to.equal(0);
});
