Feature: JQuery UI Menus
  As a user
  I want to navigate through a JQuery UI menu
  So that I can download a PDF file

  Scenario: Download PDF from nested menu
    Given I am on the JQuery UI Menus page
    When I navigate to Enabled -> Downloads -> PDF
    Then the PDF download click should succeed