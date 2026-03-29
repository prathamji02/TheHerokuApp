Feature: Inputs
  As a user
  I want to type into an input field
  So that I can verify its value

  Scenario Outline: Enter numeric values
    Given I am on the Inputs page
    When I enter the value "<value>" into the input field
    Then the input field value should be "<value>"

    Examples:
      | value |
      | 42    |
      | -10   |