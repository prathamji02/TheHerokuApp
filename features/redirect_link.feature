Feature: Redirect Link
  As a user
  I want to click a redirecting link
  So that I am navigated to the status codes page

  Scenario: Click the redirect link
    Given I am on the Redirect Link page
    When I click the redirect link
    Then I should be redirected to the status codes page