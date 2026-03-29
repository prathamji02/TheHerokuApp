Feature: Notification Messages
  As a user
  I want to trigger notification messages
  So that I can verify flash alerts

  Scenario: Trigger a notification message
    Given I am on the Notification Messages page
    When I click the Click here link for notifications
    Then I should see a notification message indicating success or failure