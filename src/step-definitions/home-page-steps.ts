import { Given, When } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser; // represent browser instance
let context: any; // represent a browser context (a separate session)
let page: Page; // represent a single tab within the context

Given('I navigate to Webdriveruniversity home page', async () => {
    // Set the browser instance
    browser = await chromium.launch({ headless: false }); // launch the browser
    context = await browser.newContext({viewport: {width:1920, height:1080}}); // create a new browser context
    page = await context.newPage(); // create a new page    

    // navigate to the URL
    await page.goto('https://www.webdriveruniversity.com/'); // navigate to the URL
});

When('I clik Contact Us', async () => {
    // await page.pause(); // pause the execution for debugging

    const contactUs_button = await page.getByRole('link', { name: 'CONTACT US Contact Us Form' });
    await contactUs_button.click(); // click the button
});
