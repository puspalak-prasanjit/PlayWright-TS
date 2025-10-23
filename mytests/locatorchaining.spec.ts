import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('Chaining of locators', async()=>{

    const browser:Browser = await chromium.launch({headless: false, channel:"chrome"});
    //const page:Page = await browser.newPage();
    const context = await browser.newContext(); // <-- Incognito context
    const page: Page = await context.newPage();

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    
    //Picking the locators specifically from Playwright
    await page.locator('form#Form_getForm >> #Form_getForm_Name').fill("prasanjit");
    await page.locator('form#Form_getForm >> text = Get Your Free Trial').click();

    //Chaining the locators
    const form = page.locator('form#Form_getForm');
    const getYourFreeTryButton = page.getByRole('button', {name: 'Get Your Free Trial'});
    await form.locator(getYourFreeTryButton).click();

    //Direct chaining
    await page.locator('form#Form_getForm').locator('#Form_getForm_Name').fill('Prasanjit');
    await page.locator('form#Form_getForm').getByRole('button', {name: 'Get Your Free Trial'}).click();

    await page.waitForTimeout(10000);
    
})
