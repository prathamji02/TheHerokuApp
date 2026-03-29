Feature: Multiple Windows
  As a user
  I want to click a link that opens a new window
  So that I can verify the contents of the new window

  Scenario: Open a new window
    Given I am on the Multiple Windows page
    When I click the Click Here link
    Then a new window should open with text "New Window"