Feature: Sortable Data Tables
  As a user
  I want to view sortable data tables
  So that I can verify user data

  Scenario: Verify user data in table
    Given I am on the Sortable Data Tables page
    Then the due amount for "John" "Smith" should be "$50.00"