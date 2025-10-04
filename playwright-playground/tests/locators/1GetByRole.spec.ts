import { test, expect } from "@playwright/test";

test('GetByRole practice - heading', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const heading = page.getByRole('heading', {
        name: 'our services',
        exact: false
    });
    await expect(heading).toBeVisible();
});

test('GetByRole practice - list', async ({ page }) => {
    await page.goto('');

    const list = page.getByRole('list');
    await expect(list).toBeVisible();

    /* "listitem" is not a Playwright fixture - it's an ARIA role, which is part of the Web Accessibility standards. 
    It represents an item in a list element. */
    const serviceItems = await list.getByRole('listitem').all();

    // check if the list is not empty
    for (const item of serviceItems) {
        const itemText = await item.textContent();
        expect(itemText).toBeTruthy();
    }
});

test('GetByRole practice - button', async ({ page }) => {
    await page.goto('');

    const acceptCookiesButton = page.getByRole('button', {
        name: 'Accept',
        exact: true
    });

    const declineCookiesButton = page.getByRole('button', {
        name: 'Decline',
        exact: true
    });
    await acceptCookiesButton.click();
    //  to assert the buttons not displayed after clicked
    await expect(acceptCookiesButton).not.toBeVisible();
    await expect(declineCookiesButton).not.toBeVisible();
});