import test from "@playwright/test";

// This beforeEach scope is the whole this file
test.beforeEach(() => {
    console.log('Called before each test');
})

// BeforeAll and AfterAll hooks are used to set up and tear down resources that are shared across all tests in a test suite. 
// These hooks are executed once before any tests run and once after all tests have completed, respectively. 
// They are useful for tasks such as establishing database connections, initializing test data, or cleaning up resources after tests have finished.
test.describe('With describe block',() => {
    test.beforeEach(() => {
        console.log('Called before test inside describe block');
    })

    test('With all fields', () => {
        console.log('test 1')
    })

    test('With minimal field', () => {
        console.log('test 2')
    })

    test('Fields are completed', () => {

    })  
});


test.describe('Save data', () => {
    
    test('Data is saved', () => {

    })

    test('Data is loaded', () => {

    })

    test('Data is stored to memory', () => {

    })

    test.describe('Errors while saving data', ()=>{
        test('Network error', ()=>{

        })
        test('Invalid data', ()=>{
            
        })
        test('Unknown error', ()=>{
            
        })        
    })
})