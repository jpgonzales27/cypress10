import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      demoVar: "Hello from Cypress.Config.ts",
      Angular: "https://www.globalsqa.com",
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com",
    },
  },
  pageLoadTimeout: 90000,
});
