import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import './commonStep.spec'


Given(/^I lunch the correct Url of SwagLab site$/, () => {
	 cy.LunchApp()
});

When(/^I enter the username standard_user$/, () => {
	 cy.EnterUsername();
});

When(/^I enter the Password secret_sauce$/, () => {
	 cy.EnterPassword();
});

When(/^I click the Login button$/, () => {
	return cy.ClickLoginBtn()
});

Then(/^I should see the product page$/, () => {
	return cy.VerifyProduct()
});

// problem
Then(/^I enter the problem username$/, () => {
	return cy.EnterProblemUsername();
});

Then(/^I insert the correct Password$/, () => {
	return  cy.EnterPassword();
});

Then(/^I should see the same product images$/, () => {
	cy.verifyProductImages();
});

//locked user
Then(/^I enter the Locked username$/, () => {
	return cy.EnterLockedUsername();
});

Then(/^I insert the Password$/, () => {
	return cy.EnterPassword();
});

Then(/^I should get an error message$/, () => {
	return cy.verifyErrorMessage();
});


// performance user
Then(/^I enter the performance glitch username$/, () => {
    cy.insertPerformanceUsername();
});

Then(/^i enter the correct Password$/, () => {
   return cy.EnterPassword();
});

Then(/^I should see product page$/, () => {
   return cy.VerifyProduct();
});
