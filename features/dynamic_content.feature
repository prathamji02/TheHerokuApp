Feature: Dynamic Content
  As a user
  I want to visit the Dynamic Content page
  So that I can verify the content changes upon refresh

  Scenario: Refreshing changes the content
    Given I am on the Dynamic Content page
    When I record the initial content
    And I refresh the page
    Then the content should be different from the initial content