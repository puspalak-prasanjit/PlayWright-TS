import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import assert from 'assert';

let browser: Browser;
let page: Page;

Given ('That the url is hit',{ timeout: 60000 }, async function () {
    
    browser = await chromium.launch({headless: false , channel:'chrome'});
    page = await browser.newPage();
    await page.goto("https://www.orangehrm.com/en/30-day-free-trial");
})
When('I Select an element to focus', async function (){
    
    const fullname = page.locator("#Form_getForm_Name");
      await fullname.focus(); 
})
Then('The particular element will be highlighted', async function (){

    console.log("Element is highlighted");
    
})