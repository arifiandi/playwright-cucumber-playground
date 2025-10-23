import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('FeedBackForm.html');
});

test('Submit feedback form with with required fields', async ({page}) => {
    const nameField = page.getByRole('textbox', {name: 'Name (required):'});
    const emailField = page.getByRole('textbox', {name: 'Email (required):'});
    const commentField = page.getByRole('textbox', {name: 'Comment (required):'});
    const highlightsField = page.getByRole('textbox', {name: 'Event Highlights (optional):'});
    const checkbox = page.locator('#tos');
    const submitBtn = page.getByRole('button', {name: 'Submit'})

    await nameField.fill('John Doe');
    await emailField.fill('john.doe@example.com');
    await commentField.fill('Great event!');
    await highlightsField.fill('Networking opportunities');
    await checkbox.check();

    await submitBtn.click();

    
});

test('Form is submitted with required fields - form is cleared after submit', async ({page}) => {

});

test('Form is NOT submitted without minimal fields', async ({page}) => {

});