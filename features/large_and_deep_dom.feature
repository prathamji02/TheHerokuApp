Feature: Large & Deep DOM
  As a user
  I want to locate elements in a large and deeply nested DOM
  So that I can verify the framework can handle complex structures

  Scenario: Traverse the deeply nested DOM
    Given I am on the Large & Deep DOM page
    Then I should be able to locate the sibling "50.3"
    And I should be able to locate the table cell at row "50" and column "50"