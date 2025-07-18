Feature: Login functionality

  Scenario: Valid user can log in
    Given I am on the login page
    When I enter email "pwtest@opencart.com" and password "playwright@123"
    And I click the login button
    Then I should see the account page

    