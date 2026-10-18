 import {test, expect} from '@playwright/test';

 test('saving storage - data is cleared - accept dialog', async ({page}) => {

    // Register an event (Dialog handler) must be before the action that triggers the dialog
    page.on('dialog', dialog => {
        dialog.accept();
    })

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

 test ('saving storage - data is cleared - reject dialog', async ({page}) => {

    page.on('dialog', dialog => {
        
        if (dialog.message().includes('clear the form')){
            dialog.dismiss();
            return;
        }
       dialog.accept();
    })

    const someOne = 'Alex'

    await page.goto('FeedBackForm.html');

    const nameField = page.getByRole('textbox', { name: 'Name (required):' });

    await nameField.fill(someOne);

    await page.getByRole('button', {
        name: 'Save Progress'
    }).click();

    await page.reload();

    await page.getByRole('button', {
        name: 'Clear Progress'
    }).click();

    await page.reload();

    await expect(nameField).toHaveValue(someOne);
 });