import { test, expect } from '@playwright/test';

test('CSS selectors', async ({ page }) => {
    await page.goto('')
    const welcomeMessage = page.locator('header').locator('h1')
    const welcomeMessageText = await welcomeMessage.textContent()
    expect(welcomeMessageText).toContain('Welcome')

    const welcomeMessage2 = page.locator('header > h1')
    const welcomeMessageText2 = await welcomeMessage2.textContent()
    expect(welcomeMessageText2).toContain('Welcome')

    const cookieBanner = page.locator('#cookie-banner')
    await expect(cookieBanner).toBeVisible()

    const acceptButton = page.locator('.accept')
    await acceptButton.click()
    expect(cookieBanner).not.toBeVisible()
});