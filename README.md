# Playwright Cucumber Automation Framework

This project is an automation testing framework using Playwright with Cucumber for behavior-driven development (BDD).

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/arifiandi/playwright-cucumber-playground.git
cd playwright-cucumber-playground
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

## Project Structure

```
playwright-cucumber-playground/
├── src/
│   ├── features/          # Cucumber feature files
│   ├── step-definitions/  # Step definitions
│   │   └── hooks/        # Test hooks and fixtures
│   └── utils/            # Utility functions
└── package.json
```

## Running Tests

### Run all tests

```bash
npm run cucumberWithTS
```

### Run specific feature file

```bash
npx cucumber-js src/features/specific-feature.feature --require-module ts-node/register --require src/step-definitions/**/*.ts
```

## Configuration

- Tests run in headed mode by default (browser visible)
- Viewport is set to 1920x1080
- Tests use Chromium browser

## Debugging

To run tests with debug logging:

```bash
DEBUG=cucumber* npm run cucumberWithTS
```

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## License

ISC