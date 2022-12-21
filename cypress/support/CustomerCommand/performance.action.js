Cypress.Commands.add('insertPerformanceUsername', ()=>{
    cy.fixture('element').then(ele =>{
        cy.get(ele.usernameField).should('be.visible').type(ele.gltchUsername)
    })
})