Feature: SignUp, Log in and Purchase product

    Scenario: TC-001 Create a new user/SignUp
        Given I am on the home page
        When Navigate to the SignUp section
        Then Create a user with random data

    Scenario: TC-002 Log in with already created user's data
        Given I am on the log in page
        When  I am login with newly created user's data
        Then I shall verify the address info in my address

    Scenario Outline:TC-003 Add product in cart and checkout
        Given I am on the log in page
        When  I am login with newly created user's data
        And I click on the <option> icon
        And Title of the page should be <pageTitle>
        And 
        Examples:
        |option|pageTitle|

        
            
