import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4000",
    specPattern: "cypress/e2e/**/*.cy.{ts,tsx}",
    supportFile: "cypress/support/e2e.ts",
    viewportWidth: 1280,
    viewportHeight: 720
  }
});