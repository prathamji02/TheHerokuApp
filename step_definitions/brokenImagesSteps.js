const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given(/^I am on the Broken Images page$/, async function () {
  await this.driver.get('http://the-internet.herokuapp.com/broken_images');
  // Adding a 2-second pause for debugging
  await new Promise(resolve => setTimeout(resolve, 2000));
});

When('I check all images', async function () {
  // Find all images within the main content area
  const imageLocator = By.css('.example img');
  await this.driver.wait(until.elementLocated(imageLocator), 5000);
  const images = await this.driver.findElements(imageLocator);

  this.brokenImageCount = 0;

  for (const image of images) {
    const isBroken = await this.driver.executeScript(
      'return arguments[0].naturalWidth === 0 || arguments[0].naturalHeight === 0;',
      image
    );
    if (isBroken) {
      this.brokenImageCount++;
    }
  }
});

Then('I should find one or more broken images', async function () {
  console.log(`Found ${this.brokenImageCount} broken image(s).`);
  expect(this.brokenImageCount).to.be.greaterThan(0, 'Expected to find at least one broken image, but found none.');
});
