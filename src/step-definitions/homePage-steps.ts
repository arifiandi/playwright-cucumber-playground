import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';

const url = 'https://www.webdriveruniversity.com/'; // URL to navigate to

Given('I navigate to Webdriveruniversity home page', async () => {
    // navigate to the URL
    await pageFixture.page.goto(url); // navigate to the URL
});

When('I clik Contact Us', async () => {
    // await page.pause(); // pause the execution for debugging

    const contactUs_button = await pageFixture.page.getByRole('link', { name: 'CONTACT US Contact Us Form' });
    await contactUs_button.click(); // click the button
});

When('I switch to the new browser tab', async () => {
     // wait for the new tab to open
    await pageFixture.context.waitForEvent('page');

    // get the new tab
    const allPages = pageFixture.context.pages();
    // get the last page (the new tab) and assign it to pageFixture.page
    const newPage = allPages[allPages.length - 1]; 
    // bring the new tab to the front
    await pageFixture.page.bringToFront(); 

    await pageFixture.page.setViewportSize({ width: 1920, height: 1080 });
});

// When('I type a first name', async () => {
//     await page.pause(); 
//     await page.getByPlaceholder('First Name').fill('Joe'); 
// });
