const { Given, When, Then } = require('@cucumber/cucumber');
import { expect } from '@playwright/test';
import { CucumberWorld } from './world/cucumberWorld';

let alertText: string;

Given('I navigate to Login Portal page', async function (this: CucumberWorld) {
    // Navigate to the Login Portal page
    await this.loginPortalPage.goToLoginPortal();
});

When('I enter {string} and {string}', async function (this: CucumberWorld, username: string, password: string) {
    await this.loginPortalPage.enterCredentials(username, password);
});

When('I click on the login button', async function (this: CucumberWorld) {
    // Set up dialog handler BEFORE clicking the button
    this.loginPortalPage.page.on('dialog', async (alert) => {
        alertText = alert.message().toLowerCase(); // Convert to lowercase for case-insensitive comparison
        await alert.accept();
    });

    await this.loginPortalPage.loginButton.click();
});

Then('I should see the {string} message', async function (this: CucumberWorld, message: string) {
    expect(alertText).toBe(message);
});