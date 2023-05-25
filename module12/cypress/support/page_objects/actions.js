class Actions {

    addCart(quantity) {
        let x = quantity
        cy.visit('produtos')
        cy.get('.product-block').first().click()
        cy.get('.button-variable-item').first().click() //tamanho
        cy.get('.button-variable-item').last().click()  //cor
        cy.get('.input-text').clear().type(x)           //quantidade
        cy.get('.single_add_to_cart_button').click()
        if (x === 1) {
            cy.contains('foi adicionado')
        } else {
            cy.contains(x + ' × “')
            cy.contains('foram adicionados')
        }
    }

    completeCheckout(name1, name2, company, address1, address2, city, state, postal, phone, user) {
        cy.visit('checkout')
        cy.get('#billing_first_name').click().clear().type(name1)
        cy.get('#billing_last_name').click().clear().type(name2)
        cy.get('#billing_company').click().clear().type(company)
        cy.get('#select2-billing_country-container').click().type('Brasil{enter}')
        cy.get('#billing_address_1').click().clear().type(address1)
        cy.get('#billing_address_2').click().clear().type(address2)
        cy.get('#billing_city').click().clear().type(city)
        cy.get('#select2-billing_state-container').click().type(state + '{enter}')
        cy.get('#billing_postcode').click().clear().type(postal)
        cy.get('#billing_phone').click().clear().type(phone)
        cy.get('#billing_email').click().clear().type(user)
        cy.get('#payment_method_bacs').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.contains('Obrigado. Seu pedido foi recebido.') 
    }
}

export default new Actions()