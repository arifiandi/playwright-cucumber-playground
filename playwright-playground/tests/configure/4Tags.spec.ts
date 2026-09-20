import {test, expect} from '@playwright/test';

test('With all fields',{
    tag: '@Field'
}, () => {
    console.log('test 1')
})

test('With minimal field',{
    tag: ['@Field', '@Minimal']
}, () => {
    console.log('test 2')
})

test('Fields are completed', () => {

}) 

test.describe('With describe block', {tag: '@Error'},() => {
    test('Network error', () => {
        console.log('test 1')
    })
}) 