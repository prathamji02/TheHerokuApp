Feature: File Download
  As a user
  I want to navigate to the File Download page
  So that I can verify download links are present

  Scenario: Verify file download links exist
    Given I am on the File Download page
    Then I should see download links for files