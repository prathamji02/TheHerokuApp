Feature: Infinite Scroll
  As a user
  I want to scroll down the page
  So that more content loads dynamically

  Scenario: Scroll to load more paragraphs
    Given I am on the Infinite Scroll page
    When I scroll to the bottom twice
    Then there should be more paragraphs loaded than initially