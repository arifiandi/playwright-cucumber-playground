// Define common command string for running Cucumber tests
const common = '\"./src/features/*.feature\" \
--require-module ts-node/register \
--require \"./src/step-definitions/hooks/*.ts\" \
--require \"./src/step-definitions/*.ts\" \
--require \"./src/utils/*.ts\" "';

// Define an interface for the profile object
// It defines an interface where each key is a string and its value is a string
interface profileCommands {
    [key: string]: string;
}

// Define a command object with different profiles
const profiles: profileCommands = {
    'smoke': `${common} --tags "@smoke"`,
    'regression': `${common} --tags "@regression"`,
    'sanity': `${common} --tags "@sanity"`,
    'loginPortal': `${common} --tags "@loginPortal"`, 
    'contactUs': `${common} --tags "@contactUs"`
}

// get the third command-line argument and assign it to the profile
const profile = process.argv[2];

// construct the command based on the profile
// command is the full command string to run the test for the selected profile
let command = `npx cucumber-js ${profiles[profile as 'smoke' | 'regression' | 'sanity' | 'loginPortal' | 'contactUs']}`;

console.log(`Running tests for profile: ${profile}`);
console.log(`Command: ${command}`);