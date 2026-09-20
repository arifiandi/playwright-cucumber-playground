import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
    console.log('Setting up database connection...');
});

// test.beforeEach(async ({ page }) => {
//     console.log('');
// });

test('Test 1', async ({ page }) => {
    console.log('Add something to DB1');
});

test('Test 2', async ({ page }) => {
    console.log('Add something to DB2');
});

test.afterEach(async ({ page }) => {
    console.log('Clean DB');
});

test.afterAll(async () => {
    console.log('Close DB connection...');
});