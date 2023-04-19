# Automation Framework
JS Automation Framework

#TechStack
Cypress
JavaScript
Cucumber

### Tests
there is a feature file defining the steps for the automated test case.

## Prerequisites
Before you can run the tests, you must install the following software on your machine:

* Node.js (tested with v12.19.0)
* Google Chrome
* A text editor or IDE of your choice. Visual Studio Code is a very popular option, but feel free to use a different one.

## Running the tests
After cloning the repo on your machine, open a terminal, CD into the project's root folder 
1) run `npx cypress open`.
2) the above step will open the cypress test runner
3) run the tests from the test runner

or run from the command line

# Headless
1) run `npx cypress run --spec "cypress/e2e/features/tabs.feature" --browser chrome`.

# HeadMode
1) run `npx cypress run --spec "cypress/e2e/features/tabs.feature" --browser chrome --headed`.

