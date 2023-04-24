const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://petgram-adrian-villamil-adrianvillaloco-gmailcom.vercel.app/',
  },
  chromeWebSecurity: false,
  viewportWidth: 500,
  viewportHeight: 800,
});
