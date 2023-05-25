/// <reference types="cypress" />
import Actions from '../support/page_objects/actions'

context('Exercicio Módulo 12 - Fluxo de Pedido', () => {

    /*  Como cliente: 
        1. Quero acessar a Loja EBAC para fazer um pedido de 4 produtos 
        2. Fazendo a escolha dos 4 produtos adicionando-os ao carrinho
        3. Preenchendo todas opções no checkout validando minha compra ao final
    */

    beforeEach(() => { cy.visit('/') })

    // Checkout Manual
    it('Checkout Manual', () => {
        var x = 4
        cy.visit('produtos')
        cy.get('.product-block').first().click()
        cy.get('.button-variable-item').first().click() //tamanho
        cy.get('.button-variable-item').last().click()  //cor
        cy.get('.input-text').clear().type(x)           //quantidade
        cy.get('.single_add_to_cart_button').click()
        cy.contains(x + ' × “')
        cy.contains('foram adicionados')
        cy.visit('checkout')
        cy.get('#billing_first_name').click().clear().type('João')
        cy.get('#billing_last_name').click().clear().type('José')
        cy.get('#billing_company').click().clear().type('EBAC')
        cy.get('#select2-billing_country-container').click().type('Brasil{enter}')
        cy.get('#billing_address_1').click().clear().type('Rua A, Número 1')
        cy.get('#billing_address_2').click().clear().type('Bairro B')
        cy.get('#billing_city').click().clear().type('Manaus')
        cy.get('#select2-billing_state-container').click().type('Amazonas{enter}')
        cy.get('#billing_postcode').click().clear().type('69060-000')
        cy.get('#billing_phone').click().clear().type('(92) 98765-4321')
        cy.get('#billing_email').click().clear().type('josejoao@ebac.com.br')
        cy.get('#payment_method_bacs').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.contains('Obrigado. Seu pedido foi recebido.')
    })

    // Checkout com Faker
    it('Checkout com Faker', () => {
        var faker = require('faker-br')
        var x = 4
        var name1 = faker.name.firstName()
        var name2 = faker.name.lastName()
        var user = faker.internet.email(name1)
        var pass = faker.internet.password()
        var company = faker.company.companyName()
        var address1 = faker.address.streetAddress()
        var address2 = faker.address.secondaryAddress()
        var state = faker.address.state()
        var city = faker.address.city(state)
        var zip = faker.address.zipCodeValidByState(state)
        var phone = faker.phone.phoneNumber()
        cy.visit('produtos')
        cy.get('.product-block').first().click()
        cy.get('.button-variable-item').first().click() //tamanho
        cy.get('.button-variable-item').last().click()  //cor
        cy.get('.input-text').clear().type(x)           //quantidade
        cy.get('.single_add_to_cart_button').click()
        cy.contains(x + ' × “')
        cy.contains('foram adicionados')
        cy.visit('checkout')
        cy.get('#billing_first_name').click().clear().type(name1)
        cy.get('#billing_last_name').click().clear().type(name2)
        cy.get('#billing_company').click().clear().type(company)
        cy.get('#select2-billing_country-container').click().type('Brasil{enter}')
        cy.get('#billing_address_1').click().clear().type(address1)
        cy.get('#billing_address_2').click().clear().type(address2)
        cy.get('#billing_city').click().clear().type(city)
        cy.get('#select2-billing_state-container').click().type(state + '{enter}')
        cy.get('#billing_postcode').click().clear().type(zip)
        cy.get('#billing_phone').click().clear().type(phone)
        cy.get('#billing_email').click().clear().type(user)
        cy.get('#payment_method_bacs').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.contains('Obrigado. Seu pedido foi recebido.')
    })

    // Checkout com Fixtures
    it('Checkout com Fixtures', () => {
        var checkoutData
        var x = 4
        cy.visit('produtos')
        cy.get('.product-block').first().click()
        cy.get('.button-variable-item').first().click() //tamanho
        cy.get('.button-variable-item').last().click()  //cor
        cy.get('.input-text').clear().type(x)           //quantidade
        cy.get('.single_add_to_cart_button').click()
        cy.contains(x + ' × “')
        cy.contains('foram adicionados')
        cy.visit('checkout')
        cy.fixture('data.json').then(importedData => {
            checkoutData = importedData
            cy.get('#billing_first_name').click().clear().type(checkoutData.name1)
            cy.get('#billing_last_name').click().clear().type(checkoutData.name2)
            cy.get('#billing_company').click().clear().type(checkoutData.company)
            cy.get('#select2-billing_country-container').click().type('Brasil{enter}')
            cy.get('#billing_address_1').click().clear().type(checkoutData.address1)
            cy.get('#billing_address_2').click().clear().type(checkoutData.address2)
            cy.get('#billing_city').click().clear().type(checkoutData.city)
            cy.get('#select2-billing_state-container').click().type(checkoutData.state + '{enter}')
            cy.get('#billing_postcode').click().clear().type(checkoutData.zip)
            cy.get('#billing_phone').click().clear().type(checkoutData.phone)
            cy.get('#billing_email').click().clear().type(checkoutData.user)
        })
        cy.get('#payment_method_bacs').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.contains('Obrigado. Seu pedido foi recebido.')
    })

    // Checktou com Custom-Commands
    it('Checkout com Custom-Commands', () => {
        cy.addProducts(4)
        cy.addCheckout()
    })

    // Checkout com Page-Objects
    it('Checkout com Page-Objects', () => {
        Actions.addCart(4)
        Actions.completeCheckout('João', 'José', 'EBAC', 'Rua A, Número 1', 'Bairro B', 'Manaus', 'Amazonas', '69060020', '(92) 98765-4321', 'josejoao@ebac.com.br')
    })

    // Checkout com Custom Commands + Faker + Fixture + Page-Objects
    it('Checkout com Page-Objects + Faker + Fixtures + Custom Commands', () => {
        var final
        cy.genFaker() // Faker + Custom Commands >> Fixture
        Actions.addCart(4)
        cy.fixture('data.json').then(importedFinal => { // Page-Objects + Fixture
            final = importedFinal
            Actions.completeCheckout(final.name1, final.name2, final.company, final.address1, final.address2, final.city, final.state, final.postal, final.phone, final.user)
        })
    })
})
