const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "exercise3-cypress-integration/**/*.test.{js,jsx,ts,tsx}",
  },

  component: {
    specPattern: "exercise2-cypress-components/**/*.test.{js,jsx,ts,tsx}",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
