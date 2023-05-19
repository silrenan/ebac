/// <reference types="cypress" />


context('funcionalidade: login', () => {

    var user = "aluno_ebac@teste.com"
    var pass = "teste@teste.com"

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    })

    it("login com êxito", () => {
        cy.get('#username').type(user)
        cy.get('#password').type(pass)
        cy.get('.woocommerce-form > .button').click()
        cy.contains('Logout')
    })

    it("erro de usuário", () => {
        cy.get('#username').type("erro")
        cy.get('#password').type(pass)
        cy.get('.woocommerce-form > .button').click()
        cy.contains('Erro:')
    })

    it("erro de senha", () => {
        cy.get('#username').type(user)
        cy.get('#password').type("erro")
        cy.get('.woocommerce-form > .button').click()
        cy.contains('Erro:')
    })

    afterEach(() => {
        cy.screenshot()
    })
});
