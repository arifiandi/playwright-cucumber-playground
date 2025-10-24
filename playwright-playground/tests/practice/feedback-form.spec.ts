import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('FeedBackForm.html');
});

test('Submit feedback form with with required fields', async ({ page }) => {

    page.on('dialog', dialog => {
        dialog.accept();
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

});

test('Form is submitted with required fields - form is cleared after submit', async ({ page }) => {

    page.on('dialog', dialog => {
        dialog.accept();
    })

    const nameField = page.getByRole('textbox', { name: 'Name (required):' });
    const emailField = page.getByRole('textbox', { name: 'Email (required):' });
    const commentField = page.getByRole('textbox', { name: 'Comment (required):' });
    const highlightsField = page.getByRole('textbox', { name: 'Event Highlights (optional):' });
    const checkbox = page.locator('#tos');
    const clearProgressBtn = page.getByRole('button', { name: 'Clear Progress' })

    await nameField.fill('John Doe');
    await emailField.fill('john.doe@example.com');
    await commentField.fill('Great event!');
    await highlightsField.fill('Networking opportunities');
    await checkbox.check();
    await clearProgressBtn.click();

    await expect(nameField).toBeEmpty();
    await expect(emailField).toBeEmpty();
    await expect(commentField).toBeEmpty();
    await expect(highlightsField).toBeEmpty();
    await expect(checkbox).not.toBeChecked();

});

test('Form is NOT submitted without minimal fields', async ({ page }) => {

});