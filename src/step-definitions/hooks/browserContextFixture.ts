import { BrowserContext, Page } from '@playwright/test';

export const pageFixture = {
    // @ts-ignore
    page: undefined as Page, // represent browser instance

    // @ts-ignore
    context: undefined as BrowserContext, // represent a browser context (a separate session)

};