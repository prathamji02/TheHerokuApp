Feature: A/B Testing

  As a user, I want to verify the content of the A/B testing page
  to ensure that one of the variations is always displayed.

  Scenario: Verify the heading on the A/B Testing page
    Given I am on the A/B Testing page
    Then I should see the heading is either "A/B Test Variation 1" or "A/B Test Control"
