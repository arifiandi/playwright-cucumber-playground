import { When } from "@cucumber/cucumber";
import { pageFixture } from './hooks/browserContextFixture';
import { CucumberWorld } from './world/cucumberWorld';
import logger from '../logger/logger';

When('I switch to the new browser tab', async function(this: CucumberWorld) {
    await this.basePage.switchToNewTab();
    logger.info(`Switched to new tab: ${this.getUrl()}`);
});

When('wait for {int} seconds', async (seconds: number) => {
    // await new Promise(resolve => setTimeout(resolve, seconds * 1000));
    await pageFixture.page.waitForTimeout(seconds * 1000);
});