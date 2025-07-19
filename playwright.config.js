import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 60000, // 60 seconds for each test

  testDir: './mytests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],

  use: {
    headless: true,
    actionTimeout: 10000,
    navigationTimeout: 30000,
    trace: 'on-first-retry',
  },

projects: [
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      headless: true  // 🔥 Forces headless mode even with device preset
    },
  },
  {
    name: 'firefox',
    use: {
      ...devices['Desktop Firefox'],
      headless: true,
    },
  },
  {
    name: 'webkit',
    use: {
      ...devices['Desktop Safari'],
      headless: true,
    },
  },
],
});
