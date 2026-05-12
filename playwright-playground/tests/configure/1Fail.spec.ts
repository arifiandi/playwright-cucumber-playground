import { test, expect } from '@playwright/test'

// This file is for testing the test.fail functionality of Playwright
// Fail the test if the function is not implemented yet, but pass it if it is implemented and returns the expected result.  
// The failed test will be reported as failed, but it will not cause the test suite to fail. It is a way to mark tests that are expected to fail until the feature is implemented.
test.fail('Failing test - 1', async()=>{
    expect(false).toBeTruthy()
})

function getFlightData(flightId: string){
    throw new Error('Not implemented yet')
    // return {
    //     data: flightId
    // }
}

test.fail('GetFlightData test', ()=>{
    const flightData = getFlightData('1')
    expect(flightData).toBeDefined();
})

