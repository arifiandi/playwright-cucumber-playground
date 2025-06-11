const { When, Then } = require('@cucumber/cucumber');
import { expect } from '@playwright/test';
import { pageFixture } from './hooks/browserContextFixture';

let alertText: string;

When('I enter {string} and {string}', async (username: string, password: string) => {
    // Fill in the username and password fields
    await pageFixture.page.getByPlaceholder('Username').fill(username);
    await pageFixture.page.getByPlaceholder('Password').fill(password);
});

When('I click on the login button', async () => {
    // get the alert text when the dialog appears
    await pageFixture.page.on('dialog', async (alert) => {
        alertText = alert.message();
        alert.accept(); // accept the alert dialog
    });

    const loginButton = pageFixture.page.getByRole('button', { name: 'Login' });
    await loginButton.hover();
    await loginButton.click({ force: true });
});

Then('I should see the {string} message', async (message: string) => {
    expect(alertText).toBe(message);
});