import { chromium, test } from "@playwright/test";


test("test with fixture", async ({ page }) => {
    await page.goto("https://udemy.com");
    await page.getByRole("button", { name: "OK", exact: true }).click();
});

test("Is the cookie banner still present?", async ({ page }) => {
    await page.goto("https://udemy.com");

    await page.pause();
});

test("Browser context fixture", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://udemy.com");
});

test('create page manually', async ({ }) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://udemy.com');
})
