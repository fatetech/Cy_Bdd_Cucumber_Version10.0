Feature: Testing Login for a Problem user

     A problem user should have a glitch free login

     Scenario: A problem should be able loging into swaglabs sucssefuly
     Given I lunch the swaglabs site
     And I enter the problem username
     And I insert the correct Password
     When I click the login button
     Then I should see the same product images