import { When } from "@cucumber/cucumber";
import { pageFixture } from './hooks/browserContextFixture';

// Load environment variables from .env file
import { config as loadEnv } from "dotenv";
const env = loadEnv({ path: './env/.env' });

const config = {
    width: parseInt(env.parsed?.BROWSER_WIDTH || '1920', 10),
    height: parseInt(env.parsed?.BROWSER_HEIGHT || '1080', 10)
}

When('I switch to the new browser tab', async () => {
    // wait for the new tab to open
    await pageFixture.context.waitForEvent('page');

    // get the new tab
    const allPages = pageFixture.context.pages();

    // get the last page (the new tab) and assign it to pageFixture.page
    pageFixture.page = allPages[allPages.length - 1];

    // bring the new tab to the front
    await pageFixture.page.bringToFront();

    await pageFixture.page.setViewportSize({ width: config.width, height: config.height });
});

When('wait for {int} seconds', async (seconds: number) => {
    // await new Promise(resolve => setTimeout(resolve, seconds * 1000));
    await pageFixture.page.waitForTimeout(seconds * 1000);
});