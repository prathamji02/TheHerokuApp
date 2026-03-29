Feature: Add/Remove Elements

  As a user, I want to be able to add and remove elements on the page
  to ensure the dynamic functionality is working correctly.

  Scenario: Add an element
    Given I am on the Add/Remove Elements page
    When I click the "Add Element" button
    Then I should see a "Delete" button appear

  Scenario: Remove an element
    Given I am on the Add/Remove Elements page
    When I click the "Add Element" button
    And I wait until the "Delete" button is visible
    And I click the "Delete" button
    Then the "Delete" button should be removed
