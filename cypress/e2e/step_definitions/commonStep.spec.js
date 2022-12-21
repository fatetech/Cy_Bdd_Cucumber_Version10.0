import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given(/^I lunch the swaglabs site$/, () => {
    cy.LunchApp()
});
When(/^I click the login button$/, () => {
	return cy.ClickLoginBtn();
});