import {test, expect} from "@playwright/test";

test('GetByRole practice - heading', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const heading = page.getByRole('heading', {
    name: 'our services',
    exact: true
  });
  await expect(heading).toBeVisible();
});
