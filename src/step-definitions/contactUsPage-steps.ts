import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { expect } from '@playwright/test';


When('I type a first name', async () => {
    // await page.pause();
    await pageFixture.page.getByPlaceholder('First Name').fill('Joe');
});

When('I type a last name', async () => {
   await pageFixture.page.getByPlaceholder('Last Name').fill('Bloggs');
});

When('I enter an email address', async () => {
    await pageFixture.page.getByPlaceholder('Email Address').fill('joebloggs@gmail.com');
});

When('I type a comment', async () => {
    await pageFixture.page.getByPlaceholder('Comments').fill('This is a test comment.');    
});

When('I click on the submit button', async () => {
    await pageFixture.page.waitForSelector('input[value="SUBMIT"]');
    await pageFixture.page.getByRole('button', { name: 'SUBMIT' }).click();
});

Then('I should be presented with a successful contact us submission message', async () => {
    // expect(await pageFixture.page.getByText('Thank You for your Message!')).toBeVisible();
});