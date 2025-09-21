# Playwright Cucumber Automation Framework

This project is an automation testing framework using Playwright with Cucumber for behavior-driven development (BDD).

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Git

## Project Structure

```
playwright-cucumber-playground/
├── env/                   # Environment configuration
│   └── .env              # Environment variables
├── src/
│   ├── features/         # Cucumber feature files
│   ├── page-objects/     # Page Object Models
│   │   ├── base/        # Base classes and page manager
│   │   └── pages/       # Individual page objects
│   ├── step-definitions/ # Step definitions
│   │   ├── hooks/       # Test hooks and fixtures
│   │   └── world/       # Cucumber World customization
│   ├── logger/          # Custom logging setup
│   └── utils/           # Utility functions
├── reports/             # Test execution reports
└── test-results/        # Test artifacts (traces, screenshots)
```

## Running Tests

### Run all tests
```bash
npm run cucumber
```

### Run specific test profile
```bash
npm run cucumber contactUs    # Run contact us tests
npm run cucumber loginPortal  # Run login portal tests
npm run cucumber smoke       # Run smoke tests
npm run cucumber regression  # Run regression tests
```

## Configuration

### Environment Variables (.env)
```properties
UI_AUTOMATION_BROWSER=chromium  # Browser type
HEADLESS=false                 # Run in headed mode
BROWSER_WIDTH=1920             # Viewport width
BROWSER_HEIGHT=1080            # Viewport height
RETRY=0                       # Test retry count
PARALLEL=1                    # Parallel execution count
```

## Test Reports
- HTML reports are generated in `reports/report.html`
- JSON reports are available in `reports/report.json`
- Playwright traces are saved in `test-results/trace/`

## Debugging

### Show Trace Viewer
```bash
npm run show-trace
```

### Debug Test Execution
```bash
PWDEBUG=1 npm run cucumber
```

## Key Features
- Page Object Model implementation
- Custom World object for sharing context
- Environment configuration
- HTML and JSON reporting
- Trace viewer support
- Parallel execution support
- Retry mechanism for flaky tests
- Custom logger implementation