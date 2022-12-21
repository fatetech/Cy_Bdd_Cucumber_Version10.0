Feature: Testing User Loging into swagLabs site

   Each user should have a different user login experience
   Background: user should lunch the site
     Given I lunch the correct Url of SwagLab site

    Scenario: A standard user should be able to Login into the App
        And I enter the "standard_user" username
        And I enter the Password secret_sauce
        When I click the login button
        Then I should see the product page

          Scenario: A problem should be able loging into swaglabs sucssefuly
     And I enter the "problem" username
     And I enter the Password secret_sauce
     When I click the login button
     Then I should see the same product images

     Scenario: A Locked user should not be able to loging into swaglabs
     And I enter the "Locked" username
     And I enter the Password secret_sauce
     When I click the login button
     Then I should get an error message


        Scenario: A performance user should have a glitch while loging into swaglabs
     And I enter the "performance glitch" username
     And I enter the Password secret_sauce
     When I click the login button
     Then I should see product page