Feature: Typos
  As a user
  I want to read the text on the Typos page
  So that I can verify if the text is rendered

  Scenario: Verify typos text
    Given I am on the Typos page
    Then I should see the expected text with or without the typo