Feature: Disappearing Elements
  As a user
  I want to navigate to the Disappearing Elements page
  So that I can verify the presence or absence of elements

  Scenario: Verify Menu Elements
    Given I am on the Disappearing Elements page
    Then I should see the "Home" menu item
    And I should see the "About" menu item
    And I should see the "Contact Us" menu item
    And I should see the "Portfolio" menu item
    And the "Gallery" menu item may or may not be displayed