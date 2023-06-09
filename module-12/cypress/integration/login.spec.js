/// <reference types="cypress" />
let dadosLogin

context('Funcionalidade Login', () => {
    before(() => {
        cy.fixture('data').then(perfil => {
            dadosLogin = perfil
        })
    });

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    // afterEach(() => {
    //    cy.screenshot()
    //});

    it('Login com sucesso usando Comando customizado', () => {
        cy.login(dadosLogin.user, dadosLogin.pass)
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it('Login usando fixture', () => {
        cy.fixture('data').then((dados) => {
            cy.login(dados.user, dados.pass)
        })
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it('Deve fazer login com sucesso - sem otimização', () => {
        cy.get('#username').type(dadosLogin.user)
        cy.get('#password').type(dadosLogin.pass, { log: false })
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Aluno')
    })
})