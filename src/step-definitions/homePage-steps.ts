import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import logger from '../logger/logger'; // Import logger

const url = 'https://www.webdriveruniversity.com/'; // URL to navigate to

Given('I navigate to Webdriveruniversity home page', async () => {
    // navigate to the URL
    await pageFixture.page.goto(url); // navigate to the URL
    logger.info(`Navigated to ${url}`); // Log the navigation
});

When('I click {string} link', async (linkName: string) => {
    const elem = linkName.toUpperCase()
    try {
        // wait for the link to be visible and clickable
        await pageFixture.page.locator('h1', {hasText: elem}).waitFor({ state: 'visible' });
        // click the link
        await pageFixture.page.locator('h1', {hasText: elem}).click();
    } catch (error) {
        console.error(`Error clicking link ${linkName}:`, error);
    }
});
