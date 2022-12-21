Cypress.Commands.add('LunchApp', ()=>{
    cy.visit('/')
})


Cypress.Commands.add('EnterUsername', (Username)=>{
    cy.fixture("element").then(el =>{
        cy.get(el.usernameField).should('be.visible').type(Username)
    })
})

Cypress.Commands.add('EnterPassword', ()=>{
    cy.fixture("element").then(el =>{
        cy.get(el.passwordField).should('be.visible').type(el.password)
    })
})

Cypress.Commands.add('ClickLoginBtn', ()=>{
    cy.fixture('element').then((el)=>{
        cy.get(el.loginButton).should('exist').click({force:true})
    })
})

Cypress.Commands.add('VerifyProduct', ()=>{
    cy.fixture('element').then((el)=>{
        cy.get(el.productTitle).should('be.visible').and('contain', "Products")
    })
})

