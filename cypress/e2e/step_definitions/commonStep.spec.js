import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given(/^I lunch the swaglabs site$/, () => {
    cy.LunchApp()
});
When(/^I enter the Password secret_sauce$/, () => {
    cy.EnterPassword();
});
Then(/^I enter the "([^"]*)" username$/, (userType) => {
    cy.fixture('element').then((el)=>{
        if(userType === "standard_user"){
            cy.EnterUsername(el.standardUsername);
        }else if(userType === 'problem'){
            cy.EnterUsername(el.problemUsername);
        }else if(userType === 'Locked'){
             cy.EnterUsername(el.lockedoutUsername);
        }else{
            cy.EnterUsername(el.gltchUsername);
        }
    })
});
When(/^I click the login button$/, () => {
	return cy.ClickLoginBtn()
});

