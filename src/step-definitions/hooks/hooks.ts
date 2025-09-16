import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { Browser, chromium, BrowserType, firefox, webkit } from "@playwright/test";
import { pageFixture } from "./browserContextFixture";
import { setDefaultTimeouts } from "../../utils/playwright-timeouts";
import { pageManager } from "../../page-objects/base/page-manager";

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
const sessionTimestamp = new Date().toISOString().replace(/[:.]/g, '-');

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
    setDefaultTimeouts(pageFixture.page); // Set default timeouts for the page

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

        this.pageManager = new pageManager(); // Initialize page manager for accessing page and basePage
        this.basePage = this.pageManager.createBasePage(); // Access basePage from pageManager
        this.homePage = this.pageManager.createHomePage(); // Create an instance of HomePage
        this.contactUsPage = this.pageManager.createContactUsPage(); // Create an instance of ContactUsPage
        this.loginPortalPage = this.pageManager.createLoginPortalPage(); // Create an instance of LoginPortalPage

        // Start tracing
        await pageFixture.context.tracing.start({
            screenshots: true,
            snapshots: true,
            sources: true
        });
    } catch (error) {
        console.error(`Error initializing browser context: ${error}`);
    }
});

// After is a hook that runs after each scenario in the test suite
After(async function ({ pickle, result }) {
    // Generate unique trace filename using session timestamp and scenario name
    const traceFileName = `${sessionTimestamp}_${pickle.name.replace(/\s+/g, '-')}.zip`;
    
    try {
        // Save trace for this scenario
        await pageFixture.context.tracing.stop({
            path: `test-results/trace/${traceFileName}`
        });

        // Take screenshot if test failed
        if (result?.status === Status.FAILED && pageFixture.page) {
            const screenshotPath = `./reports/screenshots/${traceFileName.replace('.zip', '.png')}`;
            const image = await pageFixture.page.screenshot({
                path: screenshotPath,
                type: 'png'
            });
            await this.attach(image, 'image/png');
        }
    } catch (error) {
        console.error(`Error saving trace/screenshot: ${error}`);
    }

    // Close the browser context
    if (browserInstance) {
        await pageFixture.page?.close();
        await browserInstance.close();
    }
});
