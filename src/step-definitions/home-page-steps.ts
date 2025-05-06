import { Given, When } from '@cucumber/cucumber';
import { Browser, Page } from 'playwright';

let browser: Browser; // represent browser instance
let context: any; // represent a browser context (a separate session)
let page: Page; // represent a single tab within the context

Given('I navigate to Webdriveruniversity home page', async () => {
    console.log('step 1');
});

When('I clik Contact Us', async () => {
    console.log('step 2');
});
