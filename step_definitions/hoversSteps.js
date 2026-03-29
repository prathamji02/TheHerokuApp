const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Hovers page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/hovers');
});

When('I hover over user {int}', async function (index) {
  const figures = await this.driver.wait(until.elementsLocated(By.css('.figure')), 5000);
  const targetFigure = figures[index - 1]; // Translate 1-based index to 0-based array index
  
  const actions = this.driver.actions({ async: true });
  await actions.move({ origin: targetFigure }).perform();
  await this.driver.sleep(500); // Brief pause to allow the CSS hover effect to render
});

Then('I should see the caption {string}', async function (expectedCaption) {
  const captions = await this.driver.findElements(By.css('.figcaption h5'));
  let isFoundAndDisplayed = false;
  for (let caption of captions) {
    if ((await caption.getText()) === expectedCaption && await caption.isDisplayed()) {
      isFoundAndDisplayed = true;
      break;
    }
  }
  expect(isFoundAndDisplayed).to.be.true;
});