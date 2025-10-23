import { defineConfig } from "playwright/test";

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 1,
  use: {
    headless: false,
    viewport: { width: 1280, height: 480 },
    baseURL: 'https://irctc.co.in',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium', channel: 'chrome' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    // {
    //   name: 'webkit',
    //   use: { browserName: 'webkit' },
    // },
  ],
});

