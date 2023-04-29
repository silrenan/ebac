Feature: configurar-produto
Como cliente da EBAC-SHOP
Quero configurar meu produto de acordo com meu tamnho e gosto
E escolher a quantidade
Para depois inserir no carrinho

  Background: seleção-inicial
    Given eu acesso a página de um produto

  Scenario: mudar-de-idéia
    When escolho entre as cores e tamanhos disponíveis
    Then o botão limpar deve voltar as opções de cor e tamnho ao estado original

  Scenario: seguir-com-compra
    When escolho entre as cores e tamanhos disponíveis
    And a quantidade for selecionada entre 0 e 11
    Then o botão compra deve permitir a compra