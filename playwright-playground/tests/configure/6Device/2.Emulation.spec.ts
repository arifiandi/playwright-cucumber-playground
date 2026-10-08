import { test, devices } from '@playwright/test';

const iphone = devices['iPhone 13 Pro'];

const latestIphoneSize = {
    width: 1024,
    height: 600
}

test.use({
    baseURL: '',
    ...iphone, // Spread the iPhone device configuration into the test context
    viewport: latestIphoneSize, // Override the viewport size for the iPhone device
})

test('Observe window', async ({ page }) => {
    await page.goto('https://www.google.com/');
})