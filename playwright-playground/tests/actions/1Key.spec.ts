import {test, expect} from '@playwright/test';

test('Fill actions', async ({page}) => {
    await page.goto('FeedBackForm.html');
    const nameField = page.getByRole('textbox', {name: 'Name (required)'});

    await nameField.fill('John');

    await nameField.fill('Alex');

    await nameField.press('A');

});

test('Key actions', async ({ page }) => {
    await page.goto('FeedBackForm.html');
    
    const nameField = page.getByRole('textbox', { name: 'name' })   

    await nameField.fill('Alex')

    await page.keyboard.down('Escape')

    await expect(nameField).toBeEmpty()
})
