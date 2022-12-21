import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import './commonStep.spec'

Then(/^I enter the Locked username$/, () => {
	return cy.EnterLockedUsername();
});

Then(/^I insert the Password$/, () => {
	return cy.EnterPassword();
});

Then(/^I should get an error message$/, () => {
	return cy.verifyErrorMessage();
});
