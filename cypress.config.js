const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  video:false,
  retries:{
      runMode: 1,
      openMode:0},
  e2e: {
    baseUrl: "https://example.cypress.io/todo",
        specPattern: [
            "cypress/integration/app/*.cy.js"
        ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});