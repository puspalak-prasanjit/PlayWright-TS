import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('Drag and Drop', async()=>{

    const browser:Browser = await chromium.launch({headless: false , channel:'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");

    //single command way:
    await page.locator("#draggable").dragTo(page.locator("#droppable"));
    await page.waitForTimeout(10000);

    //using multiple commands:
    await page.locator("#draggable").hover();
    await page.mouse.down();
    await page.locator("#droppable").hover()
    await page.mouse.up();
    
    await page.waitForTimeout(15000);

});    
