import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

When('I type a first name', async () => {
    await page.pause(); 
    await page.getByPlaceholder('First Name').fill('Joe');
});

When('I type a last name', async () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I enter an email address', async () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I type a comment', async () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I click on the submit button', async () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should be presented with a successful contact us submission message', async () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});