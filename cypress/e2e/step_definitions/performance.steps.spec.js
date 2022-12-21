import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import './commonStep.spec'


// Given(/^I lunch the swaglabs site$/, () => {
// 	cy.LunchApp();
// });

Then(/^I enter the performance glitch username$/, () => {
	 cy.insertPerformanceUsername();
});

Then(/^i enter the correct Password$/, () => {
	return cy.EnterPassword();
});

// When(/^I click the login button$/, () => {
// 	return cy.ClickLoginBtn()
// });

Then(/^I should see product page$/, () => {
	return cy.VerifyProduct();
});
