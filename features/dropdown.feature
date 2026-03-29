Feature: Dropdown
  As a user
  I want to select options from a dropdown
  So that I can verify my selection

  Scenario: Select an option from the dropdown
    Given I am on the Dropdown page
    When I select "Option 1" from the dropdown
    Then "Option 1" should be selected
    When I select "Option 2" from the dropdown
    Then "Option 2" should be selected