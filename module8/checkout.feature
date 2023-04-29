Feature: checkout-para-finalizar-compra
Como cliente da EBAC-SHOP
Quero fazer concluir meu cadastro   
Para finalizar minha compra

  Background: dados-obrigatórios
    Given eu estou na página de checkout
    And todos os campos obrigatórios estão marcados com asterísco

  Scenario: formato-email
    When eu não preenhcer o email com o final "@ebac.com.br"
    Then uma mensagem de erro deve ser exibida

  Scenario: campos-vazio
    When eu finalizar a comprar com algum campo em branco
    Then a compra não será processada e uma mensagem de alerta deve ser exibida

  Scenario Outline: campos-vazios-2
    When eu finalizar a compra com "<campo>" em vazio
    Then a compra não será processada
    And "<mensagem>"de alerta deve ser exibida

    Examples: 
      | campo     | mensagem                                     |
      | nome      | "atenção, campo obrigatório nome vazio"      |
      | sobrenome | "atenção, campo obrigatório sobrenome vazio" |
      | endereço  | "atenção, campo obrigatório endereço vazio"  |
      | cidade    | "atenção, campo obrigatório cidade vazio"    |
      | cep       | "atenção, campo obrigatório cep vazio"       |
      | telefone  | "atenção, campo obrigatório telefone vazio"  |
      | email     | "atenção, campo obrigatório email vazio"     |
