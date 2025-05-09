import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { pageFixture } from "./browserContextFixture";

let browser: Browser; // represent browser instance

// BeforeAll is a hook that runs before all scenarios in the test suite
BeforeAll(async function () {
    console.log('\nExecuting test suite...');
});

// AfterAll is a hook that runs after all scenarios in the test suite
AfterAll(async function () {
    console.log('\nTest suite execution completed.');
});

// Before is a hook that runs before each scenario in the test suite
Before(async function () {
    // Set the browser instance
    browser = await chromium.launch({ headless: false });
    pageFixture.context = await browser.newContext({ viewport: { width: 1920, height: 1080 } }); // create a new browser context
    pageFixture.page = await pageFixture.context.newPage(); // create a new page    
});

// After is a hook that runs after each scenario in the test suite
After(async function () {
    // Close the browser context
    await pageFixture.page.close(); // close the browser context
    await browser.close();
});
