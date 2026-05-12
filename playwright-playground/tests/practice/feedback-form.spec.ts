import { test, expect, Page } from '@playwright/test';

const someName = 'John Doe';
const someEmail = 'john.doe@example.com';
const someComment = 'Great event!';
const someHighlights = 'Networking opportunities';


test.beforeEach(async ({ page }) => {
    await page.goto('FeedBackForm.html');
});

test('Submit feedback form with with required fields', async ({ page }) => {
    let formsubmitted = false;
    page.on('dialog', dialog => {
        dialog.accept();
        formsubmitted = true;
    })

    await completeFields(page);

    await clickButton(page, 'Submit');

    expect(formsubmitted).toBeTruthy();

});

test('Form is submitted with required fields - form is cleared after submit', async ({ page }) => {

    let formsubmitted = false;
    page.on('dialog', dialog => {
        dialog.accept();
        formsubmitted = true;
    })

    await completeFields(page);

    await clickButton(page, 'Submit');

    expect(formsubmitted).toBeTruthy();

    await checkIfItemsEmpty(page);
});

test('Form is NOT submitted without minimal fields', async ({ page }) => {
    let formsubmitted = false;

    page.on('dialog', dialog => {
        dialog.accept();
        formsubmitted = true;
    })

    await completeFields(page);
    await page.getByLabel('name').clear();

    await clickButton(page, 'Submit');

    expect(formsubmitted).toBeFalsy();

});

test('Form is completed - clear button clears inputs', async ({ page }) => {
    let formsubmitted = false;

    page.on('dialog', dialog => {
        dialog.accept();
        formsubmitted = true;
    })

    await completeFields(page);
    await clickButton(page, 'Clear');

    await checkIfItemsEmpty(page);
});

test('Form is NOT submitted if user selects NO on dialog', async ({ page }) => {
     
    page.on('dialog', dialog => {
        dialog.dismiss()
    })

    await completeFields(page);
    await clickButton(page, 'Submit')

    await checkIfItemsNotEmpty(page);
});

test('Form is completed - clear button clears memory storage', async ({ page }) => {
    page.on('dialog', dialog => {
        dialog.accept()
    })

    await completeFields(page);

    await clickButton(page, 'Clear');

    await page.reload()

    await checkIfItemsEmpty(page);

});

test('Form is completed - clear button does not clear inputs if dialog rejected', async ({ page }) => {
    let formcleared = false;

    page.on('dialog', dialog => {
        dialog.dismiss();
        formcleared = true;
    })

    await completeFields(page);

    await clickButton(page, 'Clear');

    await expect(formcleared).toBeTruthy();

    await checkIfItemsNotEmpty(page);
});

test('Form is completed - save data button saves data', async ({ page }) => {
    let formsaved = false;

    page.on('dialog', dialog => {
        dialog.dismiss();
        formsaved = true;
    })

    await completeFields(page);

    await clickButton(page, 'Save');

    await checkIfItemsNotEmpty(page);

    await expect(formsaved).toBeTruthy();

});

async function clickButton(page: Page, buttonName: 'Submit' | 'Save' | 'Clear') {
    await page.getByRole('button', {
        name: buttonName
    }).click()
}

async function completeFields(page: Page) {
    const nameField = page.getByLabel('name');
    const emailField = page.getByLabel('email');
    const commentField = page.getByLabel('comment');
    const highlightsField = page.getByLabel('highlights');
    const checkbox = page.getByRole('checkbox', { name: 'I agree' });

    await nameField.fill(someName);
    await emailField.fill(someEmail);
    await commentField.fill(someComment);
    await highlightsField.fill(someHighlights);
    await checkbox.check();
}

async function checkIfItemsNotEmpty(page: Page) {
    const nameLabel = page.getByLabel('name')
    const emailLabel = page.getByLabel('email')
    const commentLabel = page.getByLabel('comment')
    const highlightsLabel = page.getByLabel('highlights')
    const checkBox = page.getByRole('checkbox', { name: 'I agree' })

    await expect(nameLabel).toHaveValue(someName)
    await expect(emailLabel).toHaveValue(someEmail)
    await expect(commentLabel).toHaveValue(someComment)
    await expect(highlightsLabel).toHaveValue(someHighlights)
    await expect(checkBox).toBeChecked()
}

async function checkIfItemsEmpty(page: Page) {
    const nameLabel = page.getByLabel('name')
    const emailLabel = page.getByLabel('email')
    const commentLabel = page.getByLabel('comment')
    const highlightsLabel = page.getByLabel('highlights')
    const checkBox = page.getByRole('checkbox', { name: 'I agree' })

    await expect(nameLabel).toBeEmpty()
    await expect(emailLabel).toBeEmpty()
    await expect(commentLabel).toBeEmpty()
    await expect(highlightsLabel).toBeEmpty()
    await expect(checkBox).not.toBeChecked()
}