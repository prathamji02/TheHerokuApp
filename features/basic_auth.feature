Feature: Basic Authentication

  As a user, I want to be able to log in using Basic Authentication.

  Scenario: Successful login with Basic Authentication
    Given I am on the Basic Auth page with credentials "admin" and "admin"
    Then I should see a message containing "Congratulations! You must have the proper credentials."
