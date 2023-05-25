// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (user, pass) => {
    cy.get('#username').type(user)
    cy.get('#password').type(pass, { log: false })
    cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('addProducts', (x) => {
    cy.visit('produtos')
    cy.get('.product-block').first().click()
    cy.get('.button-variable-item').first().click() //tamanho
    cy.get('.button-variable-item').last().click()  //cor
    cy.get('.input-text').clear().type(x)           //quantidade
    cy.get('.single_add_to_cart_button').click()
    cy.contains(x + ' × “')
    cy.contains('foram adicionados')
 })

 Cypress.Commands.add('addCheckout', () => {
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

Cypress.Commands.add('genFaker', () => {
    var faker = require('faker-br')
    var name = faker.name.firstName()
    var state = faker.address.state()   
    cy.writeFile('cypress/fixtures/data.json', {
        'name1': name,
        'name2': faker.name.lastName(),
        'user': faker.internet.email(name),
        'pass': faker.internet.password(),
        'company': faker.company.companyName(),
        'address1': faker.address.streetAddress(),
        'address2': faker.address.secondaryAddress(),
        'state': state,
        'city': faker.address.city(state),
        'postal': faker.address.zipCodeValidByState(state),
        'phone': faker.phone.phoneNumber(),
    })
})
