import { test, expect } from '@playwright/test';

test('GetByTestId practice - accept cookies', async ({ page }) => {

    await page.goto('');

    const acceptCookiesButton = page.getByTestId('accept-cookies');
    const declineCookiesButton = page.getByTestId('decline-cookies');

    await acceptCookiesButton.click();

    await expect(acceptCookiesButton).not.toBeVisible();
    await expect(declineCookiesButton).not.toBeVisible();

    // await declineCookiesButton.click(); // This line is commented out to avoid clicking both buttons in a real scenario
})

test('GetByTestId practice - decline cookies', async ({ page }) => {

    await page.goto('');

    const acceptCookiesButton = page.getByTestId('accept-cookies');
    const declineCookiesButton = page.getByTestId('decline-cookies');

    await declineCookiesButton.click();

    await expect(acceptCookiesButton).not.toBeVisible();
    await expect(declineCookiesButton).not.toBeVisible();

})