Feature: Horizontal Slider
  As a user
  I want to interact with a horizontal slider
  So that I can change its value

  Scenario: Slide to a specific value
    Given I am on the Horizontal Slider page
    When I set the slider value to "3.5"
    Then the slider value should be "3.5"