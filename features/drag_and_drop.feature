Feature: Drag and Drop
  As a user
  I want to drag and drop elements on the page
  So that I can verify their positions swap correctly

  Scenario Outline: Swap columns
    Given I am on the Drag and Drop page
    When I drag column "<source>" to column "<target>"
    Then the column "column-a" header should be "<final_a_header>"
    And the column "column-b" header should be "<final_b_header>"

    Examples:
      | source   | target   | final_a_header | final_b_header |
      | column-a | column-b | B              | A              |
      | column-b | column-a | B              | A              |