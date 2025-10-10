import { test, expect } from "@playwright/test";

// locators return locators
test('Child locators', async ({ page }) => {
    await page.goto('')

    const serviceList = page.getByRole('list')
    const serviceItems = await serviceList.getByRole('listitem').all()
    expect(serviceItems.length).toBeGreaterThan(0)

    // with css locators
    const serviceItems2 = await page.locator('ul > li').all()
    for (const item of serviceItems2) {
        console.log(await item.textContent())
    }
})

test('Parent locators', async ({ page }) => {
    await page.goto('')

    const acceptCCookieButton = page.getByTestId('accept-cookies')
    const cookieBanner = acceptCCookieButton.locator('..') // parent locator

    await acceptCCookieButton.click()
    await expect(cookieBanner).not.toBeVisible()
});

test('N-th element', async ({ page }) => {
    await page.goto('')

    const buttons = page.getByRole('button')
    const acceptButton = buttons.first()
    const declineButton = buttons.last()

    await acceptButton.click()
    await expect(declineButton).not.toBeVisible()
});

test('N-th element with css', async ({ page }) => {
    await page.goto('')

    const listitem = page.getByRole('listitem')
    const thirdItem = listitem.nth(2) // zero based index

    console.log(await thirdItem.textContent());
});