import { BrowserContext, Locator, Page } from "@playwright/test";
import { pageFixture } from '../../step-definitions/hooks/browserContextFixture'; // Adjust the import path as necessary

export class BasePage {
    get page(): Page {
        return pageFixture.page;
    }

    //   Promise<void> in typescript when you're defining an async function that doesn't explicitly return a value
    public async navigate(url: string): Promise<void> {
        await pageFixture.page.goto(url);
    }

    public async waitAndClickByRole(role: string, name: string): Promise<void> {
        const element = await this.page.getByRole(role as any, { name: name });
        await element.waitFor({ state: 'visible' });
        await element.click();
    }

    public async waitAndClick(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    public async waitAndClickSelector(selector: string): Promise<void> {
        await this.page.waitForSelector(selector);
        await this.page.click(selector);
    }
}
