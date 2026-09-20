import test from "@playwright/test";

// Describe block is used to group related tests together. 
// It helps in organizing the test cases and provides a clear structure to the test suite. In this example, we have a describe block named "Test describe block" that contains three test cases. Each test case is defined using the test function, which takes a string description and a callback function that contains the test logic.
test.describe("Test describe block", () => {
    test("With all fields", () => {

    });

    test("With minimal fields", () => {
        
    });

    test('Fields are completed', () => {

    });
});

// Allowing nested describe blocks is useful for creating a hierarchical structure in the test suite. 
// It allows for better organization and grouping of related tests. 
test.describe('Save Data', () => {
    test('Data is saved', () => {
        
    });

    test('Data is loaded', () => {
        
    });

    test('Data is stored to memory', () => {
        
    });

    test.describe('Errors while saving data', () => {
        test('Network error', () => {
            
        });

        test('Invalid data', () => {
            
        });

        test('Unknown error', () => {
            
        });
    });
});