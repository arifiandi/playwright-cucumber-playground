import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { Browser, chromium, BrowserType, firefox, webkit } from "@playwright/test";
import { pageFixture } from "./browserContextFixture";

import { config as loadEnv } from "dotenv";
const env = loadEnv({ path: './env/.env' }); // Load environment variables from .env file

const config = {
    headless: env.parsed?.HEADLESS === 'true', // Convert string to boolean
    browser: env.parsed?.UI_AUTOMATION_BROWSER || 'chromium',
    width: parseInt(env.parsed?.BROWSER_WIDTH || '1920', 10),
    height: parseInt(env.parsed?.BROWSER_HEIGHT || '1080', 10)
}

// create dictionary mapping browser names to their launch functions
// This allows for dynamic browser selection based on environment variables
// The browsers object maps browser names to their respective Playwright launch functions
// This allows for dynamic browser selection based on environment variables
// The `browsers` object contains the supported browsers and their respective launch functions
// The `browserInstance` variable will hold the instance of the launched browser
// The `initializeBrowserContext` function initializes the browser context based on the selected browser

const browsers: { [key: string]: BrowserType } = {
    'chromium': chromium,
    'firefox': firefox,
    'webkit': webkit
};

let browserInstance: Browser | null = null; // represent browser instance

async function initializeBrowserContext(selectBrowser: string): Promise<Browser> {
    const launchBrowser = browsers[selectBrowser];
    if (!launchBrowser) {
        throw new Error(`Browser ${selectBrowser} is not supported.`);
    }
    return await launchBrowser.launch({ headless: config.headless }); // Launch the browser with headless mode based on environment variable
}

// Initialize the browser instance based on the selected browser
async function initializePage(): Promise<void> {
    if (!browserInstance) {
        throw new Error('Browser instance is null');
    }
    pageFixture.context = await browserInstance.newContext({
        ignoreHTTPSErrors: true
    });
    pageFixture.page = await pageFixture.context.newPage();
    await pageFixture.page.setViewportSize({
        width: config.width,
        height: config.height
    });
}

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
    try {
        browserInstance = await initializeBrowserContext(config.browser);
        console.log(`Browser context initialized for ${config.browser}`);
        await initializePage();
    } catch (error) {
        console.error(`Error initializing browser context: ${error}`);
    }

    // Start tracing
    await pageFixture.context.tracing.start({
        screenshots: true,
        snapshots: true,
        sources: true
    });
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
