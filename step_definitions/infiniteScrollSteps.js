const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Infinite Scroll page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/infinite_scroll');
  await this.driver.wait(until.elementLocated(By.css('.jscroll-added')), 10000);
});

When('I scroll to the bottom twice', async function () {
  const getParagraphCount = async () => {
    const paragraphs = await this.driver.findElements(By.css('.jscroll-added'));
    return paragraphs.length;
  };
  this.initialCount = await getParagraphCount();

  for (let i = 0; i < 2; i++) {
    await this.driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');
    await this.driver.sleep(1000); // Allow time for the AJAX request to load new content
  }
  this.finalCount = await getParagraphCount();
});

Then('there should be more paragraphs loaded than initially', async function () {
  expect(this.finalCount).to.be.greaterThan(this.initialCount);
});