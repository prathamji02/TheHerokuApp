Feature: Challenging DOM

  Scenario: Interact with the Challenging DOM elements
    Given I am on the Challenging DOM page
    When I click the blue button
    And I click the red button
    And I click the green button
    Then I should see the canvas
    And I should be able to interact with the table
