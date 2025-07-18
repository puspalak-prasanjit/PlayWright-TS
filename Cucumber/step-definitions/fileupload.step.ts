import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import assert from 'assert';

let browser: Browser;
let page: Page;

Given ('I am on the homepage',{ timeout: 60000 }, async function () {
    
    browser = await chromium.launch({headless: false , channel:'chrome'});
    page = await browser.newPage();

    await page.goto("https://the-internet.herokuapp.com/upload");

})
When('I Select a file to upload', async function (){
    page.locator("#file-upload").setInputFiles('E:/PlayWrightTypeScript/mytests/login.txt');

      await page.waitForTimeout(2000);
})
Then('The file will be successfully uploaded', async function (){
    console.log("File is uploaded")
})