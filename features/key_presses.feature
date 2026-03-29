Feature: Key Presses
  As a user
  I want to press keyboard keys
  So that I can see which key was pressed

  Scenario Outline: Press keys and verify
    Given I am on the Key Presses page
    When I press the "<key>" key
    Then the key press result should show "<result_text>"

    Examples:
      | key    | result_text           |
      | ENTER  | You entered: ENTER    |
      | ESCAPE | You entered: ESCAPE   |
      | A      | You entered: A        |