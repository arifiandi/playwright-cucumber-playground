import { BrowserContext, Locator, Page } from "@playwright/test";
import { pageFixture } from '../../step-definitions/hooks/browserContextFixture'; // Adjust the import path as necessary

export class BasePage {
    protected readonly page: Page;

    constructor() {
        this.page = pageFixture.page;
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

    public async waitAndClickSelector(selector: string, p0?: { hasText: string; }): Promise<void> {
        await this.page.waitForSelector(selector);
        await this.page.click(selector);
    }

    public async clickLinkByText(selector: string, text: string): Promise<void> {
        const linkByText = (text: string) => `${selector}:has-text("${text}")`;
        await this.page.locator(linkByText(text)).click();
    }

    public async switchToNewTab(): Promise<void> {
        // wait for the new tab to open
        await this.page.context().waitForEvent('page');

        // get the new tab
        const allPages = await this.page.context().pages();

        // get the last page (the new tab) and assign it to pageFixture.page
        pageFixture.page = allPages[allPages.length - 1];

        // bring the new tab to the front
        await this.page.bringToFront();

        await this.page.setViewportSize({ width: 1920, height: 1080 });
    }
}
