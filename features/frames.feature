Feature: Frames
  As a user
  I want to interact with elements inside an iFrame
  So that I can verify text editor functionality

  Scenario: Interact with an iFrame WYSIWYG editor
    Given I am on the iFrame page
    When I switch to the iframe and clear the text
    And I type "Hello Selenium" into the iframe editor
    Then the iframe should contain "Hello Selenium"