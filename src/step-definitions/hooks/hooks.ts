import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
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
    browser = await chromium.launch({ headless: false });
    pageFixture.context = await browser.newContext({ 
        viewport: { width: 1920, height: 1080 },
        recordVideo: {
            dir: 'test-results/videos/'
        }
    });
    
    // Start tracing
    await pageFixture.context.tracing.start({ 
        screenshots: true,
        snapshots: true,
        sources: true
    });
    
    pageFixture.page = await pageFixture.context.newPage();
});

// After is a hook that runs after each scenario in the test suite
After(async function ({ pickle, result }) {
    if (result?.status === Status.FAILED) {
        // If the scenario failed, take a screenshot
        if (pageFixture.page) {
            const screenshotPath = `./reports/screenshots/${pickle.name}${Date.now()}.png`;
            const image = await pageFixture.page.screenshot({ 
                path: screenshotPath,
                type: 'png'
             });
             await this.attach(image, 'image/png');
            console.log(`Screenshot taken for failed scenario: ${screenshotPath}`);
        } else {
            console.error('Page is not defined, cannot take screenshot.');
        }
    }
    // Stop tracing and save to file named after the scenario
    await pageFixture.context.tracing.stop({
        path: `test-results/trace/${pickle.name.replace(/\s+/g, '-')}.zip`
    });
    
    // Close the browser context
    await pageFixture.page.close(); // close the browser context
    await browser.close();
});
