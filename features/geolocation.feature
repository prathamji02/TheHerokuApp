Feature: Geolocation
  As a user
  I want to share my geolocation
  So that I can see my latitude and longitude coordinates

  Scenario: Retrieve Geolocation coordinates
    Given I am on the Geolocation page
    When I click the Where am I button
    Then I should see my latitude and longitude values