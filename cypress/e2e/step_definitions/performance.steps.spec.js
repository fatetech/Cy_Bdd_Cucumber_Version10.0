import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import './commonStep.spec'

Then(/^I enter the performance glitch username$/, () => {
	 cy.insertPerformanceUsername();
});

Then(/^i enter the correct Password$/, () => {
	return cy.EnterPassword();
});

Then(/^I should see product page$/, () => {
	return cy.VerifyProduct();
});
