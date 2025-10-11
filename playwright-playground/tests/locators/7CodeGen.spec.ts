import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    const heading = await page.getByRole('heading', { name: 'Welcome to Cool events!' });
    const acceptCookiesButton = await page.getByTestId('accept-cookies');

    await expect(heading).toBeVisible();
    await expect(page.getByText('Corporate Events')).toBeVisible();
    await expect(page.getByText('Wedding Planning')).toBeVisible();
    await expect(page.getByText('Private Parties')).toBeVisible();
    await expect(page.getByText('Graduation Parties')).toBeVisible();
    await expect(page.getByText('Fundraisers')).toBeVisible();
    await expect(page.getByText('Concerts and Festivals')).toBeVisible();

    await acceptCookiesButton.click();
});