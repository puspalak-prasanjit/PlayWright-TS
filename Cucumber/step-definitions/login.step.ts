import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import assert from 'assert';

let browser: Browser;
let page: Page;

Given('I am on the login page',{ timeout: 60000 }, async function () {
  browser = await chromium.launch({ headless: false, channel:'chrome' });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
});

When('I enter email {string} and password {string}', async function (email: string, password: string) {
  await page.fill('#input-email', email);
  await page.fill('#input-password', password);
});

When('I click the login button', async function () {
  await page.click("[value='Login']");
});

Then('I should see the account page', async function () {
  const title = await page.title();
  console.log("home page title", title);
  await page.screenshot({ path: 'homepage.png' });
  assert.strictEqual(title, 'My Account');
  await browser.close();
});