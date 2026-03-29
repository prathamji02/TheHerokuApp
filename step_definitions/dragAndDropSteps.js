const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Drag and Drop page', async function () {
    await driver.get('https://the-internet.herokuapp.com/drag_and_drop');
});

When('I drag column {string} to column {string}', async function (sourceId, targetId) {
    const source = await driver.wait(until.elementLocated(By.id(sourceId)), 5000);
    const target = await driver.wait(until.elementLocated(By.id(targetId)), 5000);

    /**
     * @note Standard Actions.dragAndDrop often fails on HTML5. 
     * We use executeScript to simulate the dataTransfer event.
     */
    const dragAndDropScript = `
        function createEvent(typeOfEvent) {
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent(typeOfEvent, true, true, null);
            event.dataTransfer = {
                data: {},
                setData: function (key, value) { this.data[key] = value; },
                getData: function (key) { return this.data[key]; }
            };
            return event;
        }
        function dispatchEvent(element, event, transferData) {
            if (transferData !== undefined) { element.dataTransfer = transferData; }
            if (element.dispatchEvent) { element.dispatchEvent(event); }
        }
        var dragStartEvent = createEvent('dragstart');
        dispatchEvent(arguments[0], dragStartEvent);
        var dropEvent = createEvent('drop');
        dispatchEvent(arguments[1], dropEvent, dragStartEvent.dataTransfer);
        var dragEndEvent = createEvent('dragend');
        dispatchEvent(arguments[0], dragEndEvent, dragStartEvent.dataTransfer);
    `;

    await driver.executeScript(dragAndDropScript, source, target);
});

Then('the column {string} header should be {string}', async function (columnId, expectedHeader) {
    const column = await driver.findElement(By.id(columnId));
    const headerText = await column.findElement(By.tagName('header')).getText();
    expect(headerText).to.equal(expectedHeader);
});