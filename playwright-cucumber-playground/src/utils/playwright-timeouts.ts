import { Page } from "@playwright/test";

import { config as loadEnv } from 'dotenv';
const env = loadEnv({path: './env/.env'});

export const setDefaultTimeouts = (page: Page) => {
    const navigationTimeout = parseInt(env.parsed?.UI_AUTOMATION_NAVIGATION_TIMEOUT || '50000');
    const commandTimeout = parseInt(env.parsed?.UI_AUTOMATION_COMMAND_TIMEOUT || '30000'); // Default to 30 seconds if not set
    page.setDefaultTimeout(commandTimeout); // Set default timeout for all actions to 30 seconds
    page.setDefaultNavigationTimeout(navigationTimeout); // Set default navigation timeout to 50 seconds
};

export const setPageTimeouts = (page: Page, timeout: number) => {
    page.setDefaultTimeout(timeout); // Set default timeout for all actions
    page.setDefaultNavigationTimeout(timeout); // Set default navigation timeout
};
