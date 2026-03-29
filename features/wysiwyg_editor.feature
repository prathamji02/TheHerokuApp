Feature: WYSIWYG Editor
  As a user
  I want to type into a WYSIWYG editor
  So that my content is formatted properly

  Scenario: Enter text into the WYSIWYG editor
    Given I am on the WYSIWYG Editor page
    When I clear the editor and type "Automated WYSIWYG text"
    Then the editor should contain "Automated WYSIWYG text"