import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test.use({
    actionTimeout: 10000, // Global default timeout to 10 seconds for all tests in suite.
});

test('Auto wait checks 1 ', async()=>{
        
    const browser:Browser = await chromium.launch({headless: false, channel:"chrome"});
    const page:Page = await browser.newPage();
    //page.setDefaultTimeout(15000);
    //default timeout in playwright is 30 seconds

    
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.locator("input[name='agreeTerms1a2b']").check({timeout: 5000});

});

// test('Auto wait checks 2 ', async()=>{
        
//     const browser:Browser = await chromium.launch({headless: false, channel:"chrome"});
//     const page:Page = await browser.newPage();
    
//     await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
//     await page.locator("input[name='agreeTerms1a2b']").check({timeout: 10000});

// });

// test('Auto wait checks 3 ', async()=>{
        
//     const browser:Browser = await chromium.launch({headless: false, channel:"chrome"});
//     const page:Page = await browser.newPage();
    
//     await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
//     await page.locator("input[name='agreeTerms1a2b']").check({timeout: 10000});

// });