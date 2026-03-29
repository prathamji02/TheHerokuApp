const { Given, Then } = require('@cucumber/cucumber');
const { By } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Nested Frames page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/nested_frames');
});

Then('I should be able to read {string} from the left frame', async function (expectedText) {
  await this.driver.switchTo().defaultContent();
  await this.driver.switchTo().frame(await this.driver.findElement(By.name('frame-top')));
  await this.driver.switchTo().frame(await this.driver.findElement(By.name('frame-left')));
  
  const body = await this.driver.findElement(By.css('body'));
  expect(await body.getText()).to.include(expectedText);
});

Then('I should be able to read {string} from the bottom frame', async function (expectedText) {
  await this.driver.switchTo().defaultContent();
  await this.driver.switchTo().frame(await this.driver.findElement(By.name('frame-bottom')));
  const body = await this.driver.findElement(By.css('body'));
  expect(await body.getText()).to.include(expectedText);
});