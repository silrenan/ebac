Feature: login-auth
As an EBAC-SHOP customer I want to log in to the platform to view my orders

  Background: login-screen
    Given that I access the EBAC-SHOP login page

  Scenario: auth-ok
    Given that I input user: "<user>" and pass: "<pass>" as credentials
    Then I should be directed to the checkout screen

    Examples: 
      | user  | pass |
      | alice | 1234 |
      | bob   | 4321 |

  Scenario: auth-error
    Given that I input user: "<user>" and pass: "<pass>" as credentials
    Then I should receive an alert message: "Invalid Credentials"

    Examples: 
      | user   | pass |
      | karen  | yolo |
      | hacker | l337 |
