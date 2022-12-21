import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor/lib/methods";
import './commonStep.spec'

// Given(/^I lunch the swaglabs site$/, () => {
// 	return cy.LunchApp();
// });

Then(/^I enter the problem username$/, () => {
	return cy.EnterProblemUsername();
});

Then(/^I insert the correct Password$/, () => {
	return  cy.EnterPassword();
});

// When(/^I click the login button$/, () => {
// 	return cy.ClickLoginBtn();
// });

Then(/^I should see the same product images$/, () => {
	cy.verifyProductImages();
});
