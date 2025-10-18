import { test, expect } from '@playwright/test';

test('Complex Button Test', async ({ page }) => {
    await page.goto('ComplexButton.html');

    const header = page.getByRole('heading', { name: 'This is a complex button' });
    const bodyMsg = page.getByText('It becomes visible after 2')
    const button = page.locator('#myButton');
    const clicked = page.locator('#myLabel')

    // Verify header is visible
    await expect(header).toBeVisible();

    // Verify body message is visible
    await expect(bodyMsg).toBeVisible();

    // Wait for button to be visible and click it
    // await button.waitFor({ state: 'visible' })
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await button.click();

    // Verify button click message is visible
    await expect(clicked).toBeVisible();

});