const { When, Then } = require('@cucumber/cucumber');
import { expect } from '@playwright/test';
import { pageFixture } from './hooks/browserContextFixture';

When('I enter {string} and {string}', async (username:string, password:string) => {
    // Fill in the username and password fields
    await pageFixture.page.getByPlaceholder('Username').fill(username);
    await pageFixture.page.getByPlaceholder('Password').fill(password);
});

Then('I should see the {string} message', async (message: string) => {
    const alert = await pageFixture.page.evaluate(() => {
        return window.alert();
    });
    expect(alert).toContain(message);
});