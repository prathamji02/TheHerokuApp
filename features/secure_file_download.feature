Feature: Secure File Download
  As an authenticated user
  I want to download a file securely
  So that I can verify access control

  Scenario: Download a file with authentication
    Given I am on the Secure File Download page with credentials "admin" and "admin"
    When I click on a file to download
    Then the file download link should be valid