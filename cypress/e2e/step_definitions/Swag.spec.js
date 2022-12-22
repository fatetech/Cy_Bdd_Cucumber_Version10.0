import { Then } from "@badeball/cypress-cucumber-preprocessor";
import './commonStep.spec';


Then("I enter the {string} username", (userType) => {
    cy.fixture('element').then((ele) => {
        if (userType === 'standardUsername') {
            cy.EnterUsername(ele.standardUsername);
        } else if (userType === 'problemUsername') {
            cy.EnterUsername(ele.problemUsername);
        } else if (userType === 'lockedoutUsername') {
            cy.EnterUsername(ele.lockedoutUsername);
        } else {
            cy.EnterUsername(ele.gltchUsername);
        }
    })
})

Then('I should see the {string}', (experience) => {  
        switch (experience) {
            case 'productTitle':
                cy.VerifyProduct();
                break
            case 'productImage':
                cy.verifyProductImages();
                break
            case 'errorMessage':
                cy.verifyErrorMessage();
                break
            case 'productTitle':
                cy.VerifyProduct();
        }
})