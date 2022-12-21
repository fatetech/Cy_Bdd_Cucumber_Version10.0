Cypress.Commands.add('EnterLockedUsername', ()=>{
    cy.fixture('element').then(ele =>{
        cy.get(ele.usernameField).should('be.visible').type(ele.lockedoutUsername)
    })
})

Cypress.Commands.add('verifyErrorMessage', ()=>{
    cy.fixture('element').then(ele =>{
        cy.get(ele.LockedMessage).should('contains', 'Epic sadface: Sorry, this user has been locked out.')
    })
})