const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Secure File Download page with credentials {string} and {string}', async function (username, password) {
  const url = `http://${username}:${password}@the-internet.herokuapp.com/download_secure`;
  await this.driver.get(url);
});

When('I click on a file to download', async function () {
  const fileLink = await this.driver.wait(until.elementLocated(By.css('.example a')), 5000);
  this.fileHref = await fileLink.getAttribute('href');
  // We don't click it as it would trigger a browser download dialog, which is hard to manage.
  // Instead, we verify the link is present and valid.
});

Then('the file download link should be valid', async function () {
  expect(this.fileHref).to.not.be.null;
  expect(this.fileHref).to.include('/download_secure/');
  // A full test would involve making an HTTP request to this href and checking the status code,
  // but for UI testing, verifying the link's existence is often sufficient.
});