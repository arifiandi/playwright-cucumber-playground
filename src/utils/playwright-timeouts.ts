import { Page } from "@playwright/test";

export const setDefaultTimeouts = (page: Page) => {
    page.setDefaultTimeout(30000); // Set default timeout for all actions to 30 seconds
    page.setDefaultNavigationTimeout(50000); // Set default navigation timeout to 50 seconds
};

export const setPageTimeouts = (page: Page, timeout: number) => {
    page.setDefaultTimeout(timeout); // Set default timeout for all actions
    page.setDefaultNavigationTimeout(timeout); // Set default navigation timeout
};
