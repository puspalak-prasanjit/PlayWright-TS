import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'


test('Check live scores',async()=>{

    const browser:Browser = await chromium.launch({headless: true });
    const page:Page = await browser.newPage();
    
    await page.goto("https://cricbuzz.com");

    console.log("checking CI report");
    
});