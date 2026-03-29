Feature: Checkboxes

  As a user, I want to interact with checkboxes on the page.

  Scenario: Manipulate checkboxes and verify their state
    Given I am on the Checkboxes page
    Then the first checkbox should not be selected
    And the second checkbox should be selected
    When I click the first checkbox
    Then the first checkbox should be selected
    When I click the second checkbox
    Then the second checkbox should not be selected
