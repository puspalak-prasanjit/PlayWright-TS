import { chromium } from 'playwright';
import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'

test('non incognito mode', async () => {
  const browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const context = await browser.newContext(); // Incognito context
  const page = await context.newPage();
  await page.goto('https://www.google.com');
  await page.waitForTimeout(10000); // Wait 10 seconds to see the browser
  await browser.close();
});

test('verify incognito context', async () => {
  const browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.google.com');
  // Set a cookie
  await context.addCookies([{
    name: 'testcookie',
    value: 'testvalue',
    domain: '.google.com',
    path: '/',
    httpOnly: false,
    secure: true,
    sameSite: 'Lax',
    expires: Date.now() / 1000 + 60
  }]);
  // Check that the cookie exists
  const cookies = await context.cookies();
  console.log('Cookies in this context:', cookies);

  await browser.close();

  // Launch a new context and check cookies again
  const browser2 = await chromium.launch({ headless: false, channel: 'chrome' });
  const context2 = await browser2.newContext();
  const cookies2 = await context2.cookies('https://www.google.com');
  console.log('Cookies in new context:', cookies2); // Should be empty

  await browser2.close();
});