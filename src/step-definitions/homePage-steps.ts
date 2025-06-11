import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';

const url = 'https://www.webdriveruniversity.com/'; // URL to navigate to

Given('I navigate to Webdriveruniversity home page', async () => {
    // navigate to the URL
    await pageFixture.page.goto(url); // navigate to the URL
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

When('I switch to the new browser tab', async () => {
    // wait for the new tab to open
    await pageFixture.context.waitForEvent('page');

    // get the new tab
    const allPages = pageFixture.context.pages();

    // get the last page (the new tab) and assign it to pageFixture.page
    pageFixture.page = allPages[allPages.length - 1];

    // bring the new tab to the front
    await pageFixture.page.bringToFront();

    await pageFixture.page.setViewportSize({ width: 1920, height: 1080 });
});
