import { test } from "@playwright/test";

test("getByLabel - inside forms", async ({ page }) => {
    await page.goto("FeedBackForm.html");

    const name = await page.getByLabel("name");

    await name.fill("John");
    await name.clear();
    await name.fill("Mary");

    const email = await page.getByLabel("email");
    await email.fill("mary@example.com");

    const comment = await page.getByLabel("comment");
    await comment.fill("This is my comment");

    const highlights = await page.getByLabel("highlights");
    await highlights.fill("These are my highlights");
});