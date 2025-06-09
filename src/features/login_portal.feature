Feature: Webdriveruniversity.com - Login portal page

    Background: open the Webdriveruniversity home page and navigate to the Contact Us page
        Given I navigate to Webdriveruniversity home page
        When I click Login Portal
        And I switch to the new browser tab

    Scenario Outline: Scenario Outline name
        And I enter "<username>" and "<password>"
        And I click on the login button
        Then I should see the "<message>" message

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | Password123  | validation failed    |