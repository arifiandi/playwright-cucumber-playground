const { Given, When, Then } = require('@cucumber/cucumber');
import { expect } from '@playwright/test';
import { pageFixture } from './hooks/browserContextFixture';
import { CucumberWorld } from '../step-definitions/world/cucumberWorld';
import { loginPortalPage } from '../page-objects/login-portal-page';

let alertText: string;

Given('I navigate to Login Portal page', async function (this: CucumberWorld) {
    // Navigate to the Login Portal page
    await this.loginPortalPage.goToLoginPortal();
});

When('I enter {string} and {string}', async function (this: CucumberWorld, username: string, password: string) {
    // Fill in the username and password fields
    // await pageFixture.page.getByPlaceholder('Username').fill(username);
    // await pageFixture.page.getByPlaceholder('Password').fill(password);
    await this.loginPortalPage.enterCredentials(username, password);

});

When('I click on the login button', async function (this: CucumberWorld) {
    await this.loginPortalPage.loginButton.click();
    
    // get the alert text when the dialog appears
    await pageFixture.page.on('dialog', async (alert) => {
        alertText = alert.message();
        alert.accept(); // accept the alert dialog
    });

    await this.loginPortalPage.loginButton.hover();
    await this.loginPortalPage.loginButton.click({ force: true });
});

Then('I should see the {string} message', async (message: string) => {
    expect(alertText).toBe(message);
});