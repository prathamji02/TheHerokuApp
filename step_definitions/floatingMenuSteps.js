const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Floating Menu page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/floating_menu');
});

Then('the floating menu should be visible', async function () {
  const menu = await this.driver.wait(until.elementLocated(By.id('menu')), 5000);
  const isDisplayed = await menu.isDisplayed();
  expect(isDisplayed).to.be.true;
});

When('I scroll to the bottom of the page', async function () {
  await this.driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');
  await this.driver.sleep(1000); // Give the browser a moment to scroll and render
});

Then('the floating menu should still be visible', async function () {
  const menu = await this.driver.findElement(By.id('menu'));
  const isDisplayed = await menu.isDisplayed();
  expect(isDisplayed).to.be.true;
  
  // Specifically ensure it is floating within the client viewport, not scrolled out of bounds
  const isVisibleInViewport = await this.driver.executeScript(`
    var elem = arguments[0];
    var rect = elem.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  `, menu);
  expect(isVisibleInViewport).to.be.true;
});