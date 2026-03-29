Feature: Hovers
  As a user
  I want to hover over images
  So that I can see additional information

  Scenario Outline: Hover over user profiles
    Given I am on the Hovers page
    When I hover over user <index>
    Then I should see the caption "<caption_text>"

    Examples:
      | index | caption_text   |
      | 1     | name: user1    |
      | 3     | name: user3    |