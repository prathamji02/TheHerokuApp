Feature: Entry Ad
  As a user
  I want to see an entry ad modal
  So that I can close it

  Scenario: Close the entry ad
    Given I am on the Entry Ad page
    When I wait for the modal to appear
    And I click the close button on the modal
    Then the modal should no longer be visible