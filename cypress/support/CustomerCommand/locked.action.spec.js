Cypress.Commands.add('EnterLockedUsername', ()=>{
    cy.fixture('element').then(ele =>{
        cy.get(ele.usernameField).should('be.visible').type(ele.lockedoutUsername)
    })
})

Cypress.Commands.add('verifyErrorMessage', ()=>{
    cy.fixture('element').then(ele =>{
        cy.get(ele.errorButton).should('exist').and('have.text', ele.errorMessage)
    })
})