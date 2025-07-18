import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('non incognito mode', async()=>{
    
    //Incognito mode
    const  browser:Browser = await chromium.launch({headless:false, channel:'chrome' });
    const page:Page = await browser.newPage();

    //Launching chrome browser in normal mode
   // const browser:BrowserContext = await chromium.launchPersistentContext('', {headless: false , channel: 'chrome'});
    
    // A directory will be created in the project for storing browser data however its better to use the empty directory
    //const browser:BrowserContext = await chromium.launchPersistentContext('./Session', {headless: false , channel: 'chrome'});

    //Firefox:
    //const browser:BrowserContext = await firefox.launchPersistentContext('', {headless: false , });

    //const page:Page = await browser.newPage();//Since it's launching 2 pages we will have to handle it as below.

    // const pages:Page[] = browser.pages(); //2 pages; so index will be 0,1
    // const page:Page = pages[0];
    

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    await page.waitForTimeout(10000);
     
} )