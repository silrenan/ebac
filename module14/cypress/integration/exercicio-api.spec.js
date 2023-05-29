/// <reference types="cypress" />
import users from "../contracts/user.contracts"


describe('Testes da Funcionalidade Usuários', () => {

     it('Deve validar contrato de usuários', () => {
          cy.request('usuarios').then(response => {
               return users.validateAsync(response.body)
          })
     });

     it('Deve listar usuários cadastrados', () => {
          cy.request({
               method: 'GET',
               url: 'usuarios'
          }).then(response => {
               expect(response.status).to.equal(200)
          })
     });

     it('Deve cadastrar um usuário com sucesso', () => {
          var faker = require('faker-br')
          var name1 = faker.name.firstName()
          cy.request({
               method: 'POST',
               url: 'usuarios',
               body: {
                    "nome": name1 + ' ' + faker.name.lastName(),
                    "email": faker.internet.email(name1),
                    "password": faker.internet.password(),
                    "administrador": "true"
               }
          }).then(response => {
               expect(response.status).to.equal(201)
          })
     });

     it('Deve validar um usuário com email inválido', () => {
          var faker = require('faker-br')
          var name1 = faker.name.firstName()
          cy.request({
               method: 'POST',
               url: 'usuarios',
               body: {
                    "nome": name1 + ' ' + faker.name.lastName(),
                    "email": "teste erro esperado",
                    "password": faker.internet.password(),
                    "administrador": "true"
               },
               failOnStatusCode: false
          }).then(response => {
               expect(response.status).to.equal(400)
          })
     });

     it('Deve editar um usuário previamente cadastrado', () => {
          var faker = require('faker-br')
          var name1 = faker.name.firstName()
          var name = name1 + ' ' + faker.name.lastName()
          var email = faker.internet.email(name1)
          var password = faker.internet.password()
          var admFlag = "true"
          cy.cadastrarUsuario(name, email, password, admFlag)
               .then(response => {
                    var id = response.body._id
                    cy.request({
                         method: 'PUT',
                         url: `usuarios/${id}`,
                         body: {
                              "nome": name,
                              "email": faker.internet.email(name1),
                              "password": faker.internet.password(),
                              "administrador": "true"
                         }
                    }).then(response => {
                         expect(response.status).to.equal(200)
                    })
               })

     });

     it('Deve deletar um usuário previamente cadastrado', () => {
          var faker = require('faker-br')
          var name1 = faker.name.firstName()
          var name = name1 + ' ' + faker.name.lastName()
          var email = faker.internet.email(name1)
          var password = faker.internet.password()
          var admFlag = "true"
          cy.cadastrarUsuario(name, email, password, admFlag)
               .then(response => {
                    var id = response.body._id
                    cy.request({
                         method: 'DELETE',
                         url: `usuarios/${id}`
                    }).then(response => {
                         expect(response.status).to.equal(200)
                    })
               })
     });
});
