
Cypress.Commands.add('verifyErrorMessage', ()=>{
    cy.fixture('element').then(ele =>{
        cy.get(ele.errorButton).should('exist').and('have.text', ele.errorMessage)
    })
})