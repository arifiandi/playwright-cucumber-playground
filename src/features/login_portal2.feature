@regression @loginPortal2
Feature: Webdriveruniversity.com - Login portal page

    Background: open the Login Portal page
        Given I navigate to Login Portal page
        When I click "Login Portal" link
        And I switch to the new browser tab

    @loginPortal-2
    Scenario Outline: Scenario Outline name
        And I enter "<username>" and "<password>"
        And I click on the login button
        Then I should see the "<message>" message

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | Password123  | validation failed    |

        @smoke
        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
