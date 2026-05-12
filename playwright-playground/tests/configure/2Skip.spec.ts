import { test, expect } from '@playwright/test'
// This file is for testing the test.skip and test.fixme functionality of Playwright
// Skip the test if the feature is not implemented yet, but pass it if it is implemented and returns the expected result.

test.skip('Testing for an unfinished feature', () => {

})

test.fixme('Fix faulty test', ()=>{
    console.log('This test will not be run')
})

test('Mobile features', async ({ page, isMobile }) => {
    test.skip(isMobile == false, 'This test is for mobile browsers only')
})