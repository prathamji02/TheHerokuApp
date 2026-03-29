Feature: Nested Frames
  As a user
  I want to switch between nested frames
  So that I can verify text in different frame locations

  Scenario: Traverse nested frames
    Given I am on the Nested Frames page
    Then I should be able to read "LEFT" from the left frame
    And I should be able to read "BOTTOM" from the bottom frame