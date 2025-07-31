import { exec } from "child_process"; // to allow execution of shell commands  
import dotenv from 'dotenv'; 
dotenv.config({ path: './env/.env' });

// Setting rery value from environment variables or defaulting to '0'
const parallelValue = process.env.PARALLEL || '1';
const retryValue = process.env.RETRY || '0'; 

// Define common command string for running Cucumber tests
const common = `./src/features/*.feature \
  --require-module ts-node/register \
  --require ./src/step-definitions/**/**/*.ts \
  --require ./src/utils/cucumber-timeout.ts \
  -f json:./reports/report.json \
  --format html:./reports/report.html \
  --parallel ${parallelValue} \
  --retry ${retryValue} \
  --tags "not @ignore"`;


// Define an interface for the profile object
// It defines an interface where each key is a string and its value is a string
interface profileCommands {
    [key: string]: string;
}

// Define a command object with different profiles
const profiles: profileCommands = {
    smoke: `${common} --tags "@smoke"`,
    regression: `${common} --tags "@regression"`,
    sanity: `${common} --tags "@sanity"`,
    loginPortal: `${common} --tags "@loginPortal"`,
    contactUs: `${common} --tags "@contactUs"`
}

// get the third command-line argument and assign it to the profile
const profile = process.argv[2];

// construct the command based on the profile
// command is the full command string to run the test for the selected profile
let command = `npx cucumber-js ${profiles[profile as 'smoke' | 'regression' | 'sanity' | 'loginPortal' | 'contactUs']}`;

// console.log(`Running tests for profile: ${profile}`);
// console.log(`Command: ${command}`);

//execute the command using exec
exec(command, { encoding: 'utf-8' }, (error: Error | null, stdout: string) => {
    // Log the output of the command
    console.log(`Command output:\n${stdout}`);

    // If there is an error, throw an error with the message
    if (error) {
        throw new Error(`Error executing command: ${error.message}`);
    }
});
