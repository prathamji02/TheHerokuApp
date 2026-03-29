Feature: Shadow DOM
  As a user
  I want to interact with elements inside a Shadow DOM
  So that I can verify their content

  Scenario: Read text from within a Shadow DOM
    Given I am on the Shadow DOM page
    Then I should see the text "Let's have some different text!" from within the shadow root