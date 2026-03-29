Feature: Dynamic Controls
  As a user
  I want to interact with dynamic controls
  So that I can verify elements are added/removed or enabled/disabled asynchronously

  Scenario: Remove and Add a checkbox
    Given I am on the Dynamic Controls page
    When I click the Remove button
    Then I should see the message "It's gone!"
    And the checkbox should be gone
    When I click the Add button
    Then I should see the message "It's back!"
    And the checkbox should be present

  Scenario: Enable and Disable an input field
    Given I am on the Dynamic Controls page
    When I click the Enable button
    Then I should see the message "It's enabled!"
    And the input field should be enabled
    When I click the Disable button
    Then I should see the message "It's disabled!"
    And the input field should be disabled