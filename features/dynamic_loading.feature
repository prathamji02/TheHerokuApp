Feature: Dynamic Loading
  As a user
  I want to load elements dynamically
  So that I can verify they appear after a delay

  Scenario: Element is hidden and then rendered
    Given I am on the Dynamic Loading Example 1 page
    When I click the Start loading button
    Then I wait for the loading bar to disappear
    And I should see the text "Hello World!"

  Scenario: Element is rendered after the fact
    Given I am on the Dynamic Loading Example 2 page
    When I click the Start loading button
    Then I wait for the loading bar to disappear
    And I should see the text "Hello World!"