/// <reference types="cypress" />
var faker = require('faker-br');
var name1 = faker.name.firstName()
var name2 = faker.name.lastName()
var email = faker.internet.email(name1 + "", faker.fake)
var pass = faker.internet.password()

context('funcionalidade: cadastro', () => {

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    })

    it("cadastro com êxito", () => { 
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(pass)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').clear().type(name1)
        cy.get('#account_last_name').clear().type(name2)
        cy.get('.woocommerce-Button').click()
        cy.contains('modificados com sucesso')
    })
    afterEach(() => {
        cy.screenshot()
    })
})
