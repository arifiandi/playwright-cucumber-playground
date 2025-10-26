import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('FeedBackForm.html');
});

test('Submit feedback form with with required fields', async ({ page }) => {
    let formsubmitted = false;
    page.on('dialog', dialog => {
        dialog.accept();
        formsubmitted = true;
    })

    const nameField = page.getByRole('textbox', { name: 'Name (required):' });
    const emailField = page.getByRole('textbox', { name: 'Email (required):' });
    const commentField = page.getByRole('textbox', { name: 'Comment (required):' });
    const highlightsField = page.getByRole('textbox', { name: 'Event Highlights (optional):' });
    const checkbox = page.locator('#tos');
    const submitBtn = page.getByRole('button', { name: 'Submit' })

    await nameField.fill('John Doe');
    await emailField.fill('john.doe@example.com');
    await commentField.fill('Great event!');
    await highlightsField.fill('Networking opportunities');
    await checkbox.check();

    await submitBtn.click();

    expect(formsubmitted).toBeTruthy();

});

test('Form is submitted with required fields - form is cleared after submit', async ({ page }) => {

    let formsubmitted = false;

    page.on('dialog', dialog => {
        dialog.accept();
        formsubmitted = true;
    })

    const nameField = page.getByRole('textbox', { name: 'Name (required):' });
    const commentField = page.getByRole('textbox', { name: 'Comment (required):' });
    const checkbox = page.locator('#tos');
    const submitBtn = page.getByRole('button', { name: 'Submit' })

    await nameField.fill('John Doe');
    await commentField.fill('Great event!');
    await checkbox.check();

    await submitBtn.click();

    expect(formsubmitted).toBeFalsy();

});

test('Form is NOT submitted without minimal fields', async ({ page }) => {

});

test('Form is completed-clear button clears inputs', async ({ page }) => {
    let formsubmitted = false;

    page.on('dialog', dialog => {
        dialog.accept();
        formsubmitted = true;
    })

    const nameField = page.getByRole('textbox', { name: 'Name (required):' });
    const emailField = page.getByRole('textbox', { name: 'Email (required):' });
    const commentField = page.getByRole('textbox', { name: 'Comment (required):' });
    const highlightsField = page.getByRole('textbox', { name: 'Event Highlights (optional):' });
    const checkbox = page.locator('#tos');
    const clearProgressBtn = page.getByRole('button', { name: 'Clear Progress' });

    await nameField.fill('John Doe');
    await emailField.fill('john.doe@example.com');
    await commentField.fill('Great event!');
    await highlightsField.fill('Networking opportunities');
    await checkbox.check();
    await clearProgressBtn.click();

    expect(await nameField.inputValue()).toBe('');
    expect(await emailField.inputValue()).toBe('');
    expect(await commentField.inputValue()).toBe('');
    expect(await highlightsField.inputValue()).toBe('');
    expect(await checkbox.isChecked()).toBeFalsy();

});

test('Form is completed - clear button clears memory storage', async ({ page }) => {

});

test('Form is completed -clear button does not clear inputs if dialog rejected', async ({ page }) => {

});

test('Form is completed - save data button saves data', async ({ page }) => {

});
