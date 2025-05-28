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
    // select element using id and add custom timeout
    await pageFixture.page.waitForSelector('#contact_reply h1', { timeout: 60000 });

    // get the text content of the element
    const text = await pageFixture.page.innerText('#contact_reply h1')

    expect(text).toBe('Thank You for your Message!');
});

Then('I should be presented with an unsuccessful contact us submission message', async () => {
    // locate the <body> element and wait for it to be visible
    await pageFixture.page.waitForSelector('body');

    // locate the <body> element and get its text content
    const bodyElement = await pageFixture.page.locator('body');

    // extract the text content from the body element
    const bodyText = await bodyElement.textContent();

    // check if the body text contains the expected error message
    await expect(bodyText).toMatch(/Error: (all fields are required|Invalid email address)/);
});

When('I type a specific first name {string}', async (firstName: string) => {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    await pageFixture.page.getByPlaceholder('First Name').fill(firstName);
});

When('I type a specific last name {string}', async (lastName: string) => {
    await pageFixture.page.getByPlaceholder('Last Name').fill(lastName);
});

When('I enter a specific email address {string}', async (email: string) => {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    await pageFixture.page.getByPlaceholder('Email Address').fill(email);
});

When('I type specific text {string} and a number {int} within the home input field', async (word: string, number: number) =>{
    // When('I type specific text {string} and a number {float} within the home input field', function (string, float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});