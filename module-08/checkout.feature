Feature: checkout
As an EBAC-SHOP customer I want to conclude my registration to complete the checkout

  Background: mandatory-data
    Given I access the checkout page
    And all mandatory fields are marked with a red asterisk

  Scenario: email-format
    When I fill the email field with something other than "@ebac.com.br" as domain
    Then a error message should be displayed.

  Scenario: empty-fields
    When I attempt to conclude the process with any field left in blank
    Then the purchase will not be proccessed
    And an alert messaged should be diplayed