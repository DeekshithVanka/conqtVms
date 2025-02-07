const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  projectId: "ujfjty",
  e2e: {
    retries:1,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
  // env:{
  //   URL:'https://vendor-test.conqt.com/'
  // }


});
