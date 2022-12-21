Cypress.Commands.add('EnterProblemUsername', ()=>{
    cy.fixture('element').then(ele =>{
        cy.get(ele.usernameField).should('be.visible').type(ele.problemUsername)
    })
})

Cypress.Commands.add('verifyProductImages', ()=>{
    cy.fixture('element').then(ele =>{
        cy.get(ele.productImage).should('be.visible').and('have.length', 12)
    })
})