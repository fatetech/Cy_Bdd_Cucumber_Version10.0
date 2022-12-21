import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"


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
