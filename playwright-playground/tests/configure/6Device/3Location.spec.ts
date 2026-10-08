import {test} from '@playwright/test';

test.use({
    baseURL: '',
    geolocation: { 
        longitude: 12.4924, 
        latitude: 41.8902 }, // Set geolocation to Rome, Italy
    permissions: ['geolocation'], // Grant permission for geolocation
})

test('Observe location', async ({ page }) => {
    await page.goto('https://www.openstreetmap.org/');
    await page.getByRole('button', { name: 'Show My Location' }).click();
})