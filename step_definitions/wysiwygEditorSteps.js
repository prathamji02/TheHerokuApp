const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until, Key } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the WYSIWYG Editor page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/tinymce');
});

When('I clear the editor and type {string}', async function (newText) {
  const iframe = await this.driver.wait(until.elementLocated(By.id('mce_0_ifr')), 10000);
  await this.driver.switchTo().frame(iframe);
  
  const editorBody = await this.driver.wait(until.elementLocated(By.id('tinymce')), 5000);
  
  // Use CTRL+A and BACKSPACE to clear TinyMCE formatting reliably
  await editorBody.sendKeys(Key.CONTROL, 'a');
  await editorBody.sendKeys(Key.BACK_SPACE);
  
  await editorBody.sendKeys(newText);
});

Then('the editor should contain {string}', async function (expectedText) {
  const editorBody = await this.driver.findElement(By.id('tinymce'));
  const text = await editorBody.getText();
  expect(text).to.equal(expectedText);
  
  await this.driver.switchTo().defaultContent();
});