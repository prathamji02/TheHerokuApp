Feature: Exit Intent
  As a user
  I want to move my mouse out of the viewport
  So that I can trigger the exit intent modal

  Scenario: Trigger exit intent modal
    Given I am on the Exit Intent page
    When I move the mouse out of the viewport
    Then I should see the exit intent modal
    And I close the exit intent modal