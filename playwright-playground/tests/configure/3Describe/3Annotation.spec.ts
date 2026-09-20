import test from "@playwright/test";

// Annotation implementation on describe block
test.describe.skip('This test block will be skipped', () => {

    test('With all fields', () => {

    })

    test('With minimal fields', () => {

    })

    test('Fields are completed', () => {

    })
})

test.describe('Complete form', () => {

    test('With all fields', () => {

    })

    test('With minimal fields', () => {

    })

    test('Fields are completed', () => {

    })
})

test.describe('Save data', () => {
    
    test('Data is saved', () => {

    })

    test('Data is loaded', () => {

    })

    test('Data is stored to memory', () => {

    })

    test.describe.only('Errors while saving data - only this will be run from this block', ()=>{
        test('Network error', ()=>{

        })
        test('Invalid data', ()=>{
            
        })
        test('Unknown error', ()=>{
            
        })        
    })
})