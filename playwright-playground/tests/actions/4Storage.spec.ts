import { test, expect } from '@playwright/test';

test.use({
    storageState: {
        cookies: [],
        origins: [
            {
                origin: 'http://localhost:5000',
                localStorage: [
                    {
                        name: 'name',
                        value: 'Alex'
                    }
                ]
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

test('load from configuration - correct load', async ({ page }) => {
    await page.goto('FeedBackForm.html');

    const nameField = page.getByRole('textbox', { name: 'Name (required):' });

    await expect(nameField).toHaveValue('Alex');
});