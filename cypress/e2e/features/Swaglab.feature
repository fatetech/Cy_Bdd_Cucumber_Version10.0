Feature: Testing Login for different User

    Each user should have a different user login experience
    Background: User should Lunch the site
        Given I lunch the correct Url of SwagLab site

    Scenario Outline: A <userType> should be able to login to SwagLabs with different <experience>
        And I enter the "<userType>" username
        And I enter the Password
        When I click the Login button
        Then I should see the "<experience>"

        Examples:
            | userType          | experience   |
            | standardUsername  | productTitle |
            | problemUsername   | productImage |
            | lockedoutUsername | errorMessage |
            | gltchUsername     | productTitle |