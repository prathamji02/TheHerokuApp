Feature: Status Codes
  As a user
  I want to click on different HTTP status code links
  So that I can verify the server responds appropriately

  Scenario Outline: Verify status code pages
    Given I am on the Status Codes page
    When I click on the "<code_number>" status code
    Then I should see the status code message containing "<code_number>"

    Examples:
      | code_number |
      | 200         |
      | 404         |
      | 500         |