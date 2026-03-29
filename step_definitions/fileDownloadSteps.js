const { Given, Then } = require('@cucumber/cucumber');
const { By } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the File Download page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/download');
});

Then('I should see download links for files', async function () {
  const links = await this.driver.findElements(By.css('.example a'));
  expect(links.length).to.be.greaterThan(0, 'No download links found on the page');
  
  const href = await links[0].getAttribute('href');
  expect(href).to.include('/download/');
});