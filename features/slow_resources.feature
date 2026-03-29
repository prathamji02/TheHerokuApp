Feature: Slow Resources
  As a user
  I want to load a page with slow resources
  So that I can verify the test waits for the page to load

  Scenario: Wait for a slow page to load
    Given I am on the Slow Resources page
    Then I should see the page content after a delay