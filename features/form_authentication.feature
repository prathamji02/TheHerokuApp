Feature: Form Authentication
  As a user
  I want to log in using a form
  So that I can access secure areas or be rejected on invalid credentials

  Scenario Outline: Login attempts
    Given I am on the Login page
    When I login with username "<username>" and password "<password>"
    Then I should see the flash message "<expected_message>"

    Examples:
      | username | password             | expected_message               |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | invalid  | invalidpass          | Your username is invalid!      |