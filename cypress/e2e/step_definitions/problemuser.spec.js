import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor/lib/methods";
import './commonStep.spec'

Then(/^I enter the problem username$/, () => {
	return cy.EnterProblemUsername();
});

Then(/^I insert the correct Password$/, () => {
	return  cy.EnterPassword();
});

Then(/^I should see the same product images$/, () => {
	cy.verifyProductImages();
});
