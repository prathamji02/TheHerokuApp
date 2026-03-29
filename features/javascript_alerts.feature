Feature: JavaScript Alerts
  As a user
  I want to interact with JavaScript alerts, confirms, and prompts
  So that I can verify their outcomes

  Scenario: Interact with JS Alert
    Given I am on the JavaScript Alerts page
    When I click the "Click for JS Alert" button
    And I accept the JavaScript alert
    Then the alert result should be "You successfully clicked an alert"

  Scenario: Interact with JS Confirm
    Given I am on the JavaScript Alerts page
    When I click the "Click for JS Confirm" button
    And I dismiss the JavaScript alert
    Then the alert result should be "You clicked: Cancel"

  Scenario: Interact with JS Prompt
    Given I am on the JavaScript Alerts page
    When I click the "Click for JS Prompt" button
    And I type "Selenium" into the prompt and accept it
    Then the alert result should be "You entered: Selenium"