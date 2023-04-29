Feature: login-na-plataforma
Como cliente da EBAC-SHOP
Quero fazer meu login na plataforma
Para visualizar meus pedidos

  Background: tela-de-login
    Given que eu acesso a página de login da EBAC-SHOP

  Scenario: autenticação-válida
    Given que eu use user: "<user>" and pass: "<pass>" como credenciais
    Then eu devo ser direcionado para a tela de checkout

    Examples: 
      | user  | pass |
      | alice | 1234 |
      | bob   | 4321 |

  Scenario: autenticação-inválida
    Given que eu use user: "<user>" and pass: "<pass>" como credenciais
    Then eu devo receber uma mensagem de alerta "Crendeciais Inválidas"

    Examples: 
      | user   | pass |
      | karen  | yolo |
      | hacker | l337 |
