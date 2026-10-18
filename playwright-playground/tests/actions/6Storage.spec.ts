import { test, expect } from '@playwright/test';

test.use({
    storageState: {
        cookies: [],
        origins: [
            {
                origin: 'http://localhost:3000',
                localStorage: [{
                    name: 'name',
                    value: 'Alex'
                }]
            }
        ]
    }
});

test('saving storage - correct load', async ({ page }) => {
    const someOne = 'Alex'

    await page.goto('FeedBackForm.html');

    const nameField = page.getByRole('textbox', { name: 'Name (required):' });

    await nameField.fill(someOne);

    await page.getByRole('button', { name: 'Save Progress' }).click();

    await page.reload();

    await expect(nameField).toHaveValue(someOne);

    // Save storage state to a variable (use debugger to see the content)
    const storage = await page.context().storageState();
    const z = 5;

});

test('load from configuration', async ({ page }) => {
    await page.goto('FeedBackForm.html');

    const nameField = page.getByRole('textbox', { name: 'Name (required):' });

    await expect(nameField).toHaveValue('Alex');
});

test('Storage - configure inside test', async ({ page }) => {
    await page.goto('FeedBackForm.html');

    await page.evaluate(() => {
        localStorage.setItem('email', 'alex@email.com');
        // sessionStorage.setItem('email', 'alex@email.com');
    });

    await page.reload();

    const nameField = page.getByRole('textbox', { name: 'Name (required):' });

    await expect(nameField).toHaveValue('Alex');
});

test.fail('saving storage -data is cleared after test', async ({ page }) => {

    const someName = 'Alex'

    await page.goto('FeedBackForm.html');

    const nameField = page.getByRole('textbox', { name: 'Name (required):' });

    await nameField.fill(someName);

    await page.getByRole('button', {
        name: 'Save Progress'
    }).click();

    await page.reload();

    await page.getByRole('button', {
        name: 'Clear Progress'
    }).click();

    await page.reload();

    await expect(nameField).toBeEmpty();
});