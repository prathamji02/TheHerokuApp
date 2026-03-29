Feature: Forgot Password
  As a user
  I want to use the forgot password form
  So that I can verify the submission process

  Scenario: Retrieve password
    Given I am on the Forgot Password page
    When I enter my email "test@example.com" and submit
    Then I should be navigated to the email sent confirmation page