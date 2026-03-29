const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');
const path = require('path');
const fs = require('fs');

Given('I am on the File Upload page', async function () {
  await this.driver.get('http://the-internet.herokuapp.com/upload');
});

When('I upload a file', async function () {
  // Create a temporary dummy file to upload
  const filePath = path.join(__dirname, '..', 'dummy.txt');
  fs.writeFileSync(filePath, 'This is a dummy file for upload testing.');
  
  const fileInput = await this.driver.findElement(By.id('file-upload'));
  await fileInput.sendKeys(filePath);
  
  const submitBtn = await this.driver.findElement(By.id('file-submit'));
  await submitBtn.click();
});

Then('I should see the file uploaded successfully message', async function () {
  const heading = await this.driver.wait(until.elementLocated(By.css('h3')), 5000);
  expect(await heading.getText()).to.equal('File Uploaded!');
  
  const uploadedFiles = await this.driver.findElement(By.id('uploaded-files')).getText();
  expect(uploadedFiles.trim()).to.equal('dummy.txt');

  // Clean up the dummy file locally
  const filePath = path.join(__dirname, '..', 'dummy.txt');
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
});