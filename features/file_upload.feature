Feature: File Upload
  As a user
  I want to upload a file
  So that I can verify the upload success

  Scenario: Upload a file
    Given I am on the File Upload page
    When I upload a file
    Then I should see the file uploaded successfully message