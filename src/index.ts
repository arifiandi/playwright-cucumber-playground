// Define common command string for running Cucumber tests
const common = '\"./src/features/*.feature\" \
--require-module ts-node/register \
--require \"src/step-definitions/hooks/*.ts\" \
--require \"src/step-definitions/*.ts\" \
--require \"src/utils/*.ts\" "';