import { test, expect } from '@playwright/test'

// This file is for testing the test.only functionality of Playwright
// Only the tests marked with test.only will be run, and all other tests will be skipped. This is useful for focusing on a specific test or set of tests during development or debugging.
test('Test 1', () => {
    console.log('test 1')
})

test('Test 2', () => {
    console.log('test 2')
})

test('Test 3', () => {
    console.log('test 3')
})

test('Test 4', () => {
    console.log('test 4')
})