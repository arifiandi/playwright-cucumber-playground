import { expect, test } from '@playwright/test';

test('saving cookies - accept cookies', async ({ page }) => {
    await page.goto('');

    const acceptCookiesButton = page.getByRole('button', {
        name: 'Accept'
    });

    await acceptCookiesButton.click();

    const cookieBanner = acceptCookiesButton.locator('..');
    await expect(cookieBanner).not.toBeVisible();
});

test('saving cookies - reject cookies', async ({ page }) => {
    await page.goto('');

    const declineCookiesButton = page.getByRole('button', {
        name: 'Decline'
    });

    await declineCookiesButton.click();

    const cookieBanner = declineCookiesButton.locator('..');
    await expect(cookieBanner).not.toBeVisible();
});

test('handle cookies inside test', async ({ page }) => {
    await page.goto('');

    await page.context().addCookies([
        {
            url: page.url(),
            name: 'cookieConsent',
            value: 'accepted'
        }]);

    await page.reload();

    const cookieBanner = page.locator('#cookie-banner');
    await expect(cookieBanner).not.toBeVisible();
});