import {test} from '@playwright/test';

test.use({
    locale: 'it-IT'
})

test('Using file config', async ({ page }) => {
    await page.goto('http://www.google.com')
})

test.describe('Grouped tests', () => {
    test.use({
        locale: 'de-DE'
    })

    test('Using config from descrobe block', async ({ page }) => {
        await page.goto('http://www.google.com')
    })
})

test.fail('Setting options - wrong approach', async ({ page }) => {
    test.use({
        locale: 'fr-Fr' // This will not work, because test.use() is not allowed inside a test under 'page'
    })

    test('Using config from descrobe block', async ({ page }) => {
        await page.goto('http://www.google.com')
    })
})

test('Setting options inside test', async ({ browser }) => { //using browser instead
    //need to add context
    const context = await browser.newContext({
        locale: 'in-IN'
    })
    const page = await context.newPage()
})