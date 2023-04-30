Feature: configure-product
As an EBAC-SHOP customer I want to configure my product to my size, liking and quantity. I also want to add it to my shopping cart

  Background: initial-screen
    Given I access the product page
    And I pick a color and size

  Scenario: change-ideia
    Then the clear button should be enabled
    And the clear button should reset color and size to their default values

  Scenario: purchase
    When I pick a quantity between 0 e 11
    Then the purchase button should be enabled
    And the purchase button should direct me to checkout screen
