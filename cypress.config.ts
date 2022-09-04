import { defineConfig } from "cypress";
//verify downloads import
const { isFileExist, findFiles } = require("cy-verify-downloads");

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // verify download import
      on("task", { isFileExist, findFiles });
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
});
