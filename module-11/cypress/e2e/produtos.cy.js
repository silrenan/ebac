/// <reference types="cypress" />


context('funcionalidade: compra-produto', () => {

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/produtos/")
    })

    it("selecionar produto", () => {
        cy.get('.product-block').first().click()
    })

    it.only("adicionar carrinho", () => {
        var quantidade = 2

        cy.get('.product-block').first().click()
        cy.get('.button-variable-item').first().click() //tamanho
        cy.get('.button-variable-item').last().click()  //cor
        cy.get('.input-text').clear().type(quantidade)  //quantidade
        cy.get('.single_add_to_cart_button').click()

        if (quantidade === 1) {
            cy.contains('foi adicionado')
        } else {
            cy.contains(quantidade + ' × “')
            cy.contains('foram adicionados')
        }
    })
    afterEach(() => {
        cy.screenshot()
    })
});
