import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import './commonStep.spec'

Then(/^I enter the Locked username$/, () => {
	return cy.EnterLockedUsername();
});

Then(/^I insert the Password$/, () => {
	return cy.EnterPassword();
});

// When(/^I click the login button$/, () => {
// 	return true;
// });

Then(/^I should get an error message$/, () => {
	return cy.verifyErrorMessage();
});
