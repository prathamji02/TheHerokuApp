Feature: Floating Menu
  As a user
  I want to scroll down the page
  So that I can verify the menu is still visible

  Scenario: Verify floating menu on scroll
    Given I am on the Floating Menu page
    Then the floating menu should be visible
    When I scroll to the bottom of the page
    Then the floating menu should still be visible