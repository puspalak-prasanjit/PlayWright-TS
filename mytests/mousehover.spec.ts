import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

// test('mouse hover test', async()=>{

//     const browser:Browser = await chromium.launch({headless: false, channel:"chrome"});
//     const page:Page = await browser.newPage();
   

   

//     // await page.goto("https://www.spicejet.com/");
//     // await page.getByText('Add-ons').first().hover();
//     // await page.getByText('Visa Services').first().click();

//     await page.goto("https://www.flipkart.com/");
//     await page.getByText('FASHION').first().hover();
//     await page.getByText("Men's T-Shirts").first().click();

//     await page.waitForTimeout(100000);
// });



test('mouse hover test', async () => {
  const browser: Browser = await chromium.launch({ headless: false, channel: "chrome" });
  const context = await browser.newContext();
  const page: Page = await context.newPage();

  await page.goto("https://www.flipkart.com/");

  // Close login popup if present
  const closeBtn = page.locator('button._2KpZ6l._2doB4z');
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }

  const fashion = page.getByText('FASHION').first();
  await fashion.waitFor({ state: 'visible' });
  await fashion.hover();

  const tshirts = page.getByText("Men's T-Shirts").first();
  await tshirts.waitFor({ state: 'visible' });
  await tshirts.click();

  await page.waitForTimeout(10000);

  await browser.close();
});