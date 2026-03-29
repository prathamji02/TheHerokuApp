Feature: Context Menu
  As a user
  I want to trigger a context menu
  So that I can verify the alert text

  Scenario: Right click on the context menu box
    Given I am on the Context Menu page
    When I right-click on the hotspot
    Then I should see a JavaScript alert with text "You selected a context menu"
    And I accept the alert