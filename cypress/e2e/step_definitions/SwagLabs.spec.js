import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import './commonStep.spec'


Given(/^I lunch the correct Url of SwagLab site$/, () => {
	 cy.LunchApp()
});

Then(/^I should see the product page$/, () => {
	return cy.VerifyProduct()
});

Then(/^I should see the same product images$/, () => {
	cy.verifyProductImages();
});

Then(/^I should get an error message$/, () => {
	return cy.verifyErrorMessage();
});

Then(/^I should see product page$/, () => {
   return cy.VerifyProduct();
});
