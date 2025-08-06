import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import logger from '../logger/logger'; // Import logger
import { CucumberWorld } from './world/cucumberWorld';

const url = 'https://www.webdriveruniversity.com/'; // URL to navigate to

Given('I navigate to Webdriveruniversity home page', async function (this: CucumberWorld) {
    try {
        // navigate to the URL
        // await pageFixture.page.goto(url); // navigate to the URL
        await this.basePage.navigate(url); // Use basePage's navigate method
        logger.info(`Navigated to ${url}`); // Log the navigation 
        this.setUrl(url); // Set the URL in the world object  
        // throw new Error('This is a test error'); // Intentionally throw an error for testing 
    } catch (error: any) {
        logger.error(`Error navigating to ${url}:`, error);
    }
});

When('I click {string} link', async function (this: CucumberWorld, linkName: string) {
    const elem = linkName.toUpperCase()
    try {
        // wait for the link to be visible and clickable
        await this.basePage.waitAndClickSelector('h1', { hasText: elem });
        // click the link
        // await this.basePage.click('h1', { hasText: elem });
    } catch (error) {
        console.error(`Error clicking link ${linkName}:`, error);
    }
});
