import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'
 
test('Focus on element', async()=>{

      const browser:Browser = await chromium.launch({headless: false , channel:'chrome'});
      const page:Page = await browser.newPage();

      await page.goto("https://www.orangehrm.com/en/30-day-free-trial");
      
      await page.getByText("Get Your Free Trial").focus();
      await page.getByText("Get Your Free Trial").click();

      const fullname = page.locator("#Form_getForm_Name");
      await fullname.focus();
      await fullname.fill("automation testing");

      await page.waitForTimeout(10000);     
    
}); 