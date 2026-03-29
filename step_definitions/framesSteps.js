const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until, Key } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the iFrame page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/iframe');
});

When('I switch to the iframe and clear the text', async function () {
  const iframe = await this.driver.wait(until.elementLocated(By.id('mce_0_ifr')), 10000);
  await this.driver.switchTo().frame(iframe);
  
  const editorBody = await this.driver.wait(until.elementLocated(By.id('tinymce')), 5000);
  // .clear() can be flaky on contenteditable/TinyMCE fields, so using CTRL+A -> BACKSPACE is safer
  await editorBody.sendKeys(Key.CONTROL, 'a');
  await editorBody.sendKeys(Key.BACK_SPACE);
});

When('I type {string} into the iframe editor', async function (text) {
  const editorBody = await this.driver.findElement(By.id('tinymce'));
  await editorBody.sendKeys(text);
});

Then('the iframe should contain {string}', async function (expectedText) {
  const text = await this.driver.findElement(By.id('tinymce')).getText();
  expect(text).to.equal(expectedText);
  await this.driver.switchTo().defaultContent(); // Always return driver focus to main DOM
});