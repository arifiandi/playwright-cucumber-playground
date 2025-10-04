import { test, expect } from "@playwright/test";

/*
 getByText() is a Playwright locator method that allows you to locate elements on a web page based on their text content.
 It is particularly useful for finding elements that contain specific text, regardless of their HTML structure or attributes.

 best to find hidden elements that are not easily accessible through other selectors.
*/

test('GetByText practice - title', async ({ page }) => {
    await page.goto('FeedbackForm.html');

    const title = page.getByText('Feedback Form').first();
    await expect(title).toBeVisible();
});

test('GetByText practice - hidden elements', async ({ page }) => {
    await page.goto('FeedbackForm.html');

    const hiddenButton = page.getByText('Hidden feature');
    await expect(hiddenButton).not.toBeVisible();

    const hiddenButtonText = await hiddenButton.textContent();
    console.log('Hidden button text:', hiddenButtonText);
});

test('GetByText practice - partial match', async ({ page }) => {
    await page.goto('FeedbackForm.html');

    const emailValidationMessage = page.getByText('Invalid email format');
    await expect(emailValidationMessage).not.toBeVisible();

    await page.getByRole('textbox', {
        name: 'Email'
    }).fill('invalid-email');

    await expect(emailValidationMessage).toBeVisible();
});
