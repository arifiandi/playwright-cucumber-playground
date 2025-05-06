Feature: Webdriveruniversity.com - Contact Us page

    Scenario: Valid Contact Us Form Submission
        Given I navigate to Webdriveruniversity home page
        When I clik Contact Us
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message
