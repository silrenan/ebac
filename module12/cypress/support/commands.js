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
        'zip': faker.address.zipCodeValidByState(state),
        'phone': faker.phone.phoneNumber(),
    })
})
