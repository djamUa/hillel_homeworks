import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalSrudio: true,
    viewportHeight: 900,
    viewportWidth: 1400,
    baseUrl: 'https://www.cypress.io',
    retries: {
      openMode: 2,
      runMode: 2
    },
    setupNodeEvents(on, config) {
      on ('task', {log(message) {console.log(message); return null}})
      const newUrl = config.env.urlFromCli | 'https://www.guru99.com/'
      config.baseUrl = newUrl
      return config
      // implement node event listeners here
    },
  },
});
