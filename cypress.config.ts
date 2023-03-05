import { defineConfig } from "cypress";
//verify downloads import
const { isFileExist, findFiles } = require("cy-verify-downloads");

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // verify download import
      on("task", { isFileExist, findFiles });
      //para el reporte de mocha
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    env: {
      demoVar: "Hello from Cypress.Config.ts",
      Angular: "https://www.globalsqa.com",
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com",
    },
    experimentalSessionAndOrigin: true,
  },
  pageLoadTimeout: 90000,
  // viewportHeight: 1000,
  // viewportWidth: 1200,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Report Cypress Course",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  retries: {
    // Configure retry attempts for `cypress run` Default is 0
    runMode: 2,
    // Configure retry attempts for `cypress open` Default is 0
    openMode: 0,
  },
  video: true,
  screenshotOnRunFailure: true,
});
