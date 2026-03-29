const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');

// Set default timeout to 30 seconds for Cucumber steps
setDefaultTimeout(30000);

Before(async function () {
  try {
    const options = new edge.Options();
    // options.addArguments('--headless'); // Uncomment if you prefer headless execution
    
    // Initialize Microsoft Edge WebDriver
    this.driver = await new Builder()
      .forBrowser('MicrosoftEdge')
      .setEdgeOptions(options)
      .build();
      
    await this.driver.manage().window().maximize();
  } catch (error) {
    console.error('Error initializing WebDriver in Before hook:', error);
    throw error;
  }
});

After(async function () {
  try {
    if (this.driver) {
      await this.driver.quit();
    }
  } catch (error) {
    console.error('Error quitting WebDriver in After hook:', error);
  }
});