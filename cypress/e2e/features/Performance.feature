Feature: Testing Login for a Performnce user

     A Performnce user should have a glitch when loging into the site

     Scenario: A performance user should have a glitch while loging into swaglabs
     Given I lunch the swaglabs site
     And I enter the performance glitch username
     And i enter the correct Password
     When I click the login button
     Then I should see product page