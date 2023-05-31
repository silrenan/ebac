/// <reference types="cypress" />
import Actions from '../support/page_objects/actions'

context('Exercicio Módulo 12 - Fluxo de Pedido', () => {

    /*  Como cliente: 
        1. Quero acessar a Loja EBAC para fazer um pedido de 4 produtos 
        2. Fazendo a escolha dos 4 produtos adicionando-os ao carrinho
        3. Preenchendo todas opções no checkout validando minha compra ao final
    */

    beforeEach(() => { cy.visit('/') })
    afterEach(() => { cy.screenshot() });

    it('Checkout conforme "feedback"', () => {
        var final
        cy.genFaker()
        cy.addProducts(4)
        cy.fixture('data.json').then(importedFinal => { // Page-Objects + Fixture
            final = importedFinal
            Actions.completeCheckout(final.name1, final.name2, final.company, final.address1, final.address2, final.city, final.state, final.postal, final.phone, final.user)
        })
        cy.contains('Obrigado. Seu pedido foi recebido.')
    })
})
