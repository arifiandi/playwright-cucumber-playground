Feature: Webdriveruniversity.com - Contact Us page

    Scenario: Valid Contact Us Form Submission
        Given I navigate to Webdriveruniversity home page
        When I click Contact Us
        And I switch to the new browser tab
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid Contact Us Form Submission
        Given I navigate to Webdriveruniversity home page
        When I click Contact Us
        And I switch to the new browser tab
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with an unsuccessful contact us submission message

    Scenario: Valid Contact Us Form Submission - Using Specific Data
        Given I navigate to Webdriveruniversity home page
        When I click Contact Us
        And I switch to the new browser tab
        And I type a specific first name "Sarah"
        And I type a specific last name "Connor"
        And I enter a specific email address "sarah_connor@example.com"
        And I type specific text "Hello World" and a number 2 within the home input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Valid Contact Us Form Submission - Using Random Data
        Given I navigate to Webdriveruniversity home page
        When I click Contact Us
        And I switch to the new browser tab
        And I type a random first name
        And I type a random last name
        And I enter a random email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario Outline: Validate Contact Us page with scenario outline
        Given I navigate to Webdriveruniversity home page
        When I click Contact Us
        And I switch to the new browser tab
        And I type a specific first name <first_name> and last name <last_name>
        And I type an email address "<email_address>" and a comment "<comment>"
        And I click on the submit button
        Then I should be presented with header text "<message>"

        Examples:
            | first_name | last_name | email_address          | comment                 | message                     |
            | John       | Doe       | johndoe@email.com      | This is a test comment. | Thank You for your Message! |
            | Mia        | DCarteroe | miacarter@email.com    | Test 123 Test 123       | Thank You for your Message! |
            | Grace      | Hudson    | gracehudsonexample.com | Hello World             | Invalid email address       |