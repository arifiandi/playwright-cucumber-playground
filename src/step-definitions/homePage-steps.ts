import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser; // represent browser instance
let context: any; // represent a browser context (a separate session)
let page: Page; // represent a single tab within the context

Given('I navigate to Webdriveruniversity home page', async () => {
    // navigate to the URL
    await page.goto('https://www.webdriveruniversity.com/'); // navigate to the URL
});

When('I clik Contact Us', async () => {
    // await page.pause(); // pause the execution for debugging

    const contactUs_button = await page.getByRole('link', { name: 'CONTACT US Contact Us Form' });
    await contactUs_button.click(); // click the button
});

When('I switch to the new browser tab', async () => {
    page = await context.waitForEvent('page'); // wait for the new tab to open
    await page.bringToFront(); // bring the new tab to the front
});

When('I type a first name', async () => {
    await page.pause(); 
    await page.getByPlaceholder('First Name').fill('Joe'); 
});
