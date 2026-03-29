Feature: Broken Images

  As a user, I want to identify broken images on a page
  to ensure all image content is loading correctly.

  Scenario: Find broken images on the page
    Given I am on the Broken Images page
    When I check all images
    Then I should find one or more broken images
