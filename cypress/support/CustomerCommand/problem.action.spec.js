
Cypress.Commands.add('verifyProductImages', ()=>{
    cy.fixture('element').then(ele =>{
        cy.get(ele.productImage).should('be.visible').and('have.length', 12)
    })
})